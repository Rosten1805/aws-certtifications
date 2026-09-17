/**
 * 'exam-N' identifica un simulacro secuencial (N empieza en 1) que reparte el banco de
 * preguntas en ventanas rotativas por dominio, para minimizar repeticiones entre
 * simulacros consecutivos. 'random' selecciona preguntas al azar respetando los pesos
 * de cada dominio, y puede repetirse sin límite.
 */
export type ExamVariant = `exam-${number}` | 'random'

export type ExamStatus = 'in-progress' | 'paused' | 'finished'

export interface ExamAnswerState {
  questionId: number
  selected: string[]
  markedForReview: boolean
}

export interface ExamSession {
  id: string
  certification: string
  variant: ExamVariant
  questionIds: number[]
  answers: Record<number, ExamAnswerState>
  currentIndex: number
  status: ExamStatus
  startedAt: number
  endsAt: number
  remainingTimeOnPause?: number
  finishedAt?: number
}

export interface DomainResult {
  domain: string
  correct: number
  total: number
  percentage: number
}

export interface ExamResult {
  id: string
  examSessionId: string
  certification: string
  variant: ExamVariant
  correct: number
  incorrect: number
  unanswered: number
  total: number
  percentage: number
  passed: boolean
  timeSpentSeconds: number
  domainResults: DomainResult[]
  finishedAt: number
  questionIds: number[]
  answers: Record<number, ExamAnswerState>
}
