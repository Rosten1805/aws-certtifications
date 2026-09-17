export type Difficulty = 'easy' | 'medium' | 'hard'

export type QuestionType = 'single' | 'multiple'

export interface AnswerOption {
  id: string
  text: string
  explanation?: string
}

export interface DocumentationLink {
  title: string
  url: string
}

export interface Question {
  id: number
  certification: string
  domain: string
  topic: string
  services: string[]
  difficulty: Difficulty
  question: string
  type: QuestionType
  correctAnswers: string[]
  answers: AnswerOption[]
  explanation: string
  keyConcept?: string
  documentation?: DocumentationLink[]
  diagramUrls?: string[]
}

export type QuestionLanguage = 'es' | 'en'

/**
 * Traducción de los campos de texto de una pregunta a otro idioma. Todo lo demás
 * (id, domain, type, correctAnswers, services, difficulty) no se traduce: se
 * conserva del objeto Question original al aplicar la traducción.
 */
export interface QuestionTranslation {
  question: string
  topic?: string
  answers: { id: string; text: string; explanation?: string }[]
  explanation: string
  keyConcept?: string
}

export type QuestionTranslationMap = Record<number, QuestionTranslation>
