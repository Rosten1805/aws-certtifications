import type { Question } from '@/types/question'
import type { CertificationDomain } from '@/types/certification'
import type { DomainResult, ExamAnswerState } from '@/types/exam'

export function isAnswerCorrect(question: Question, selected: string[]): boolean {
  if (selected.length === 0) return false
  if (selected.length !== question.correctAnswers.length) return false
  const correctSet = new Set(question.correctAnswers)
  return selected.every((id) => correctSet.has(id))
}

export function calculateDomainResults(
  questions: Question[],
  questionIds: number[],
  answers: Record<number, ExamAnswerState>,
  domains: CertificationDomain[],
): DomainResult[] {
  const byId = new Map(questions.map((q) => [q.id, q]))
  const totals = new Map<string, { correct: number; total: number }>()
  domains.forEach((d) => totals.set(d.id, { correct: 0, total: 0 }))

  for (const id of questionIds) {
    const question = byId.get(id)
    if (!question) continue
    const bucket = totals.get(question.domain) ?? { correct: 0, total: 0 }
    bucket.total += 1
    const answer = answers[id]
    if (answer && isAnswerCorrect(question, answer.selected)) {
      bucket.correct += 1
    }
    totals.set(question.domain, bucket)
  }

  return domains.map((domain) => {
    const bucket = totals.get(domain.id) ?? { correct: 0, total: 0 }
    return {
      domain: domain.id,
      correct: bucket.correct,
      total: bucket.total,
      percentage: bucket.total === 0 ? 0 : Math.round((bucket.correct / bucket.total) * 100),
    }
  })
}
