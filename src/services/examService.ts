import { storage } from '@/services/storage/storage'
import { STORAGE_KEYS } from '@/services/storage/storageKeys'
import type { CertificationMeta } from '@/types/certification'
import type { ExamResult, ExamSession, ExamVariant } from '@/types/exam'
import type { Question } from '@/types/question'
import { generateId } from '@/utils/id'
import { shuffle } from '@/utils/shuffle'
import { calculateDomainResults, isAnswerCorrect } from '@/utils/scoring'

type ExamResultsStore = Record<string, ExamResult[]>

/** Extrae el índice 0-based de un simulacro secuencial 'exam-N', o null si es 'random' u otro valor. */
function parseSequentialIndex(variant: ExamVariant): number | null {
  const match = /^exam-(\d+)$/.exec(variant)
  if (!match) return null
  const n = Number(match[1])
  return Number.isInteger(n) && n >= 1 ? n - 1 : null
}

/**
 * Toma `count` elementos de `pool` empezando en `offset`, envolviendo circularmente
 * (como una ventana rotativa) cuando el offset + count supera el tamaño del pool.
 */
function pickCircularWindow<T>(pool: T[], offset: number, count: number): T[] {
  if (pool.length === 0) return []
  const picked: T[] = []
  for (let i = 0; i < count; i += 1) {
    picked.push(pool[(offset + i) % pool.length])
  }
  return picked
}

/**
 * Calcula cuántos simulacros secuenciales conviene ofrecer en la UI a partir del
 * tamaño real del banco de preguntas: cuantas más preguntas haya por encima del
 * tamaño de un examen, más simulacros distintos (con poco o ningún solape) se
 * pueden generar antes de empezar a repetir preguntas entre simulacros.
 */
function getSequentialVariantCount(questions: Question[], meta: CertificationMeta): number {
  const examLength = Math.min(meta.totalQuestions, questions.length) || 1
  const ratio = questions.length / examLength
  return Math.min(20, Math.max(3, Math.round(ratio * 1.5)))
}

/**
 * Selecciona las preguntas del simulacro respetando, dentro de lo disponible en el
 * banco, el peso oficial de cada dominio del examen (p. ej. 20/24/28/14/14 %).
 *
 * - Simulacros secuenciales ('exam-N'): por cada dominio se toma una ventana de
 *   preguntas (ordenadas por id) que rota según N, de modo que simulacros
 *   consecutivos comparten el mínimo de preguntas posible y, jugados en orden,
 *   recorren el banco completo antes de empezar a repetir.
 * - Simulacro aleatorio ('random'): selección aleatoria por dominio, puede repetirse
 *   sin límite.
 *
 * Si un dominio no tiene suficientes preguntas para cubrir su cuota, el hueco se
 * rellena con preguntas sobrantes de otros dominios para completar el total.
 */
function selectQuestionIdsByDomainWeight(
  questions: Question[],
  variant: ExamVariant,
  meta: CertificationMeta,
): number[] {
  const totalTarget = Math.min(meta.totalQuestions, questions.length)
  const byDomain = new Map<string, Question[]>()
  meta.domains.forEach((d) => byDomain.set(d.id, []))
  questions.forEach((q) => byDomain.get(q.domain)?.push(q))
  byDomain.forEach((list) => list.sort((a, b) => a.id - b.id))

  const isRandom = variant === 'random'
  const sequentialIndex = parseSequentialIndex(variant)

  const selected: number[] = []
  const usedIds = new Set<number>()

  meta.domains.forEach((domain) => {
    const pool = byDomain.get(domain.id) ?? []
    const quota = Math.min(pool.length, Math.round((domain.weight / 100) * totalTarget))

    let picked: Question[]
    if (isRandom) {
      picked = shuffle(pool).slice(0, quota)
    } else {
      const offset = sequentialIndex !== null ? (sequentialIndex * quota) % Math.max(pool.length, 1) : 0
      picked = pickCircularWindow(pool, offset, quota)
    }

    picked.forEach((q) => usedIds.add(q.id))
    selected.push(...picked.map((q) => q.id))
  })

  if (selected.length < totalTarget) {
    const remainder = questions.filter((q) => !usedIds.has(q.id))
    const orderedRemainder = isRandom ? shuffle(remainder) : remainder
    const needed = totalTarget - selected.length
    selected.push(...orderedRemainder.slice(0, needed).map((q) => q.id))
  }

  return selected.slice(0, totalTarget)
}

export const examService = {
  getSequentialVariantCount,

  buildSession(certification: string, variant: ExamVariant, questions: Question[], meta: CertificationMeta): ExamSession {
    const questionIds = selectQuestionIdsByDomainWeight(questions, variant, meta)
    const now = Date.now()
    return {
      id: generateId('exam'),
      certification,
      variant,
      questionIds,
      answers: {},
      currentIndex: 0,
      status: 'in-progress',
      startedAt: now,
      endsAt: now + meta.durationMinutes * 60 * 1000,
    }
  },

  async getCurrentExam(): Promise<ExamSession | null> {
    return storage.getItem<ExamSession>(STORAGE_KEYS.currentExam)
  },

  async saveCurrentExam(session: ExamSession): Promise<void> {
    await storage.setItem(STORAGE_KEYS.currentExam, session)
  },

  async clearCurrentExam(): Promise<void> {
    await storage.removeItem(STORAGE_KEYS.currentExam)
  },

  setAnswer(session: ExamSession, questionId: number, selected: string[]): ExamSession {
    const existing = session.answers[questionId]
    return {
      ...session,
      answers: {
        ...session.answers,
        [questionId]: {
          questionId,
          selected,
          markedForReview: existing?.markedForReview ?? false,
        },
      },
    }
  },

  toggleMark(session: ExamSession, questionId: number): ExamSession {
    const existing = session.answers[questionId]
    return {
      ...session,
      answers: {
        ...session.answers,
        [questionId]: {
          questionId,
          selected: existing?.selected ?? [],
          markedForReview: !(existing?.markedForReview ?? false),
        },
      },
    }
  },

  goToIndex(session: ExamSession, index: number): ExamSession {
    const clamped = Math.max(0, Math.min(session.questionIds.length - 1, index))
    return { ...session, currentIndex: clamped }
  },

  remainingSeconds(session: ExamSession): number {
    if (session.status === 'paused' && session.remainingTimeOnPause !== undefined) {
      return session.remainingTimeOnPause
    }
    return Math.max(0, Math.round((session.endsAt - Date.now()) / 1000))
  },

  pause(session: ExamSession): ExamSession {
    if (session.status !== 'in-progress') return session
    return {
      ...session,
      status: 'paused',
      remainingTimeOnPause: this.remainingSeconds(session),
    }
  },

  resume(session: ExamSession): ExamSession {
    if (session.status !== 'paused') return session
    const remaining = session.remainingTimeOnPause ?? 0
    return {
      ...session,
      status: 'in-progress',
      endsAt: Date.now() + remaining * 1000,
      remainingTimeOnPause: undefined,
    }
  },

  async finish(session: ExamSession, questions: Question[], meta: CertificationMeta): Promise<ExamResult> {
    const byId = new Map(questions.map((q) => [q.id, q]))
    let correct = 0
    let incorrect = 0
    let unanswered = 0

    for (const id of session.questionIds) {
      const question = byId.get(id)
      const answer = session.answers[id]
      if (!question || !answer || answer.selected.length === 0) {
        unanswered += 1
        continue
      }
      if (isAnswerCorrect(question, answer.selected)) {
        correct += 1
      } else {
        incorrect += 1
      }
    }

    const total = session.questionIds.length
    const percentage = total === 0 ? 0 : Math.round((correct / total) * 100)
    const passed = percentage >= 72
    const timeSpentSeconds = Math.max(0, Math.round((Date.now() - session.startedAt) / 1000))

    const result: ExamResult = {
      id: generateId('result'),
      examSessionId: session.id,
      certification: session.certification,
      variant: session.variant,
      correct,
      incorrect,
      unanswered,
      total,
      percentage,
      passed,
      timeSpentSeconds,
      domainResults: calculateDomainResults(questions, session.questionIds, session.answers, meta.domains),
      finishedAt: Date.now(),
      questionIds: session.questionIds,
      answers: session.answers,
    }

    const store = (await storage.getItem<ExamResultsStore>(STORAGE_KEYS.exams)) ?? {}
    store[session.certification] = [...(store[session.certification] ?? []), result]
    await storage.setItem(STORAGE_KEYS.exams, store)
    await this.clearCurrentExam()

    return result
  },

  async listResults(certification: string): Promise<ExamResult[]> {
    const store = (await storage.getItem<ExamResultsStore>(STORAGE_KEYS.exams)) ?? {}
    return (store[certification] ?? []).sort((a, b) => b.finishedAt - a.finishedAt)
  },

  async getResult(certification: string, resultId: string): Promise<ExamResult | null> {
    const results = await this.listResults(certification)
    return results.find((r) => r.id === resultId) ?? null
  },

  /**
   * Busca un resultado por id sin depender de la certificación activa en la UI,
   * por si el usuario cambió de certificación después de terminar el examen.
   */
  async findResultById(resultId: string): Promise<ExamResult | null> {
    const store = (await storage.getItem<ExamResultsStore>(STORAGE_KEYS.exams)) ?? {}
    for (const results of Object.values(store)) {
      const found = results.find((r) => r.id === resultId)
      if (found) return found
    }
    return null
  },

  async deleteResult(certification: string, resultId: string): Promise<void> {
    const store = (await storage.getItem<ExamResultsStore>(STORAGE_KEYS.exams)) ?? {}
    store[certification] = (store[certification] ?? []).filter((r) => r.id !== resultId)
    await storage.setItem(STORAGE_KEYS.exams, store)
  },

  async clearResults(certification: string): Promise<void> {
    const store = (await storage.getItem<ExamResultsStore>(STORAGE_KEYS.exams)) ?? {}
    store[certification] = []
    await storage.setItem(STORAGE_KEYS.exams, store)
  },
}
