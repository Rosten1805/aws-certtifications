export type QuestionOutcome = 'correct' | 'incorrect'

export interface QuestionProgressEntry {
  questionId: number
  lastSelected: string[]
  outcome: QuestionOutcome
  attempts: number
  updatedAt: number
}

export interface CertificationProgress {
  certification: string
  answered: Record<number, QuestionProgressEntry>
  favorites: number[]
  markedForReview: number[]
}

export interface DomainStat {
  domain: string
  answered: number
  correct: number
  percentage: number
}

export interface ServiceStat {
  service: string
  answered: number
  correct: number
  percentage: number
}

export interface TopicStat {
  topic: string
  domain: string
  answered: number
  correct: number
  percentage: number
}

export interface OverallStats {
  totalAnswered: number
  totalCorrect: number
  totalIncorrect: number
  accuracy: number
  examsTaken: number
  averageScore: number
  bestScore: number
  domainStats: DomainStat[]
  serviceStats: ServiceStat[]
  topicStats: TopicStat[]
  weakTopics: TopicStat[]
}
