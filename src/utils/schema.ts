import type { Question } from '@/types/question'

export interface ValidationIssue {
  index: number
  message: string
}

export interface ValidationResult {
  valid: Question[]
  issues: ValidationIssue[]
}

const DIFFICULTIES = new Set(['easy', 'medium', 'hard'])
const TYPES = new Set(['single', 'multiple'])

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function validateOne(raw: unknown, index: number, issues: ValidationIssue[]): Question | null {
  if (typeof raw !== 'object' || raw === null) {
    issues.push({ index, message: 'La pregunta debe ser un objeto.' })
    return null
  }
  const q = raw as Record<string, unknown>
  const errors: string[] = []

  if (typeof q.id !== 'number') errors.push('"id" debe ser un número.')
  if (!isNonEmptyString(q.certification)) errors.push('"certification" es obligatorio.')
  if (!isNonEmptyString(q.domain)) errors.push('"domain" es obligatorio.')
  if (!isNonEmptyString(q.topic)) errors.push('"topic" es obligatorio.')
  if (!Array.isArray(q.services)) errors.push('"services" debe ser un array de strings.')
  if (typeof q.difficulty !== 'string' || !DIFFICULTIES.has(q.difficulty)) {
    errors.push('"difficulty" debe ser easy, medium o hard.')
  }
  if (!isNonEmptyString(q.question)) errors.push('"question" es obligatorio.')
  if (typeof q.type !== 'string' || !TYPES.has(q.type)) {
    errors.push('"type" debe ser single o multiple.')
  }
  if (!Array.isArray(q.correctAnswers) || q.correctAnswers.length === 0) {
    errors.push('"correctAnswers" debe ser un array no vacío.')
  }
  if (!Array.isArray(q.answers) || q.answers.length < 2) {
    errors.push('"answers" debe tener al menos 2 opciones.')
  } else {
    q.answers.forEach((a, i) => {
      if (typeof a !== 'object' || a === null) {
        errors.push(`answers[${i}] debe ser un objeto.`)
        return
      }
      const opt = a as Record<string, unknown>
      if (!isNonEmptyString(opt.id)) errors.push(`answers[${i}].id es obligatorio.`)
      if (!isNonEmptyString(opt.text)) errors.push(`answers[${i}].text es obligatorio.`)
    })
  }
  if (!isNonEmptyString(q.explanation)) errors.push('"explanation" es obligatorio.')

  if (errors.length > 0) {
    errors.forEach((message) => issues.push({ index, message }))
    return null
  }

  return q as unknown as Question
}

export function validateQuestionsPayload(payload: unknown): ValidationResult {
  const issues: ValidationIssue[] = []
  if (!Array.isArray(payload)) {
    return { valid: [], issues: [{ index: -1, message: 'El JSON debe ser un array de preguntas.' }] }
  }

  const valid: Question[] = []
  payload.forEach((item, index) => {
    const result = validateOne(item, index, issues)
    if (result) valid.push(result)
  })

  return { valid, issues }
}
