import type { Question, QuestionTranslationMap } from '@/types/question'

/**
 * Aplica una traducción por pregunta al banco base (en español). Los campos
 * estructurales (id, domain, type, correctAnswers, services, difficulty) nunca
 * cambian: solo se sustituyen los campos de texto (question, topic, answers[].text,
 * answers[].explanation, explanation, keyConcept) por su versión traducida.
 *
 * Si una pregunta no tiene traducción disponible en el mapa, se devuelve tal cual
 * en el idioma base para no dejar preguntas en blanco.
 */
export function applyTranslations(questions: Question[], translations: QuestionTranslationMap | undefined): Question[] {
  if (!translations) return questions

  return questions.map((question) => {
    const translation = translations[question.id]
    if (!translation) return question

    const translatedAnswerById = new Map(translation.answers.map((a) => [a.id, a]))

    return {
      ...question,
      question: translation.question,
      topic: translation.topic ?? question.topic,
      explanation: translation.explanation,
      keyConcept: translation.keyConcept,
      answers: question.answers.map((answer) => {
        const translatedAnswer = translatedAnswerById.get(answer.id)
        if (!translatedAnswer) return answer
        return {
          ...answer,
          text: translatedAnswer.text,
          explanation: translatedAnswer.explanation,
        }
      }),
    }
  })
}
