import type { Question } from '@/types/question'
import type { CertificationProgress } from '@/types/progress'
import type { QuestionFilters, SortOption } from '@/types/filters'
import { isAnswerCorrect } from '@/utils/scoring'
import { shuffle } from '@/utils/shuffle'

export function getAllServices(questions: Question[]): string[] {
  const services = new Set<string>()
  questions.forEach((q) => q.services.forEach((s) => services.add(s)))
  return Array.from(services).sort((a, b) => a.localeCompare(b))
}

function matchesStatus(question: Question, progress: CertificationProgress, status: QuestionFilters['status']): boolean {
  const entry = progress.answered[question.id]
  switch (status) {
    case 'all':
      return true
    case 'unanswered':
      return !entry
    case 'correct':
      return entry?.outcome === 'correct'
    case 'incorrect':
      return entry?.outcome === 'incorrect'
    case 'marked':
      return progress.markedForReview.includes(question.id)
    case 'favorite':
      return progress.favorites.includes(question.id)
    default:
      return true
  }
}

export function filterQuestions(
  questions: Question[],
  progress: CertificationProgress,
  filters: QuestionFilters,
): Question[] {
  const search = filters.search.trim().toLowerCase()
  return questions.filter((q) => {
    if (filters.domain !== 'all' && q.domain !== filters.domain) return false
    if (filters.difficulty !== 'all' && q.difficulty !== filters.difficulty) return false
    if (filters.service !== 'all' && !q.services.includes(filters.service)) return false
    if (!matchesStatus(q, progress, filters.status)) return false
    if (search && !q.question.toLowerCase().includes(search) && !q.topic.toLowerCase().includes(search)) {
      return false
    }
    return true
  })
}

export function sortQuestions(
  questions: Question[],
  progress: CertificationProgress,
  sortBy: SortOption,
): Question[] {
  const difficultyRank: Record<Question['difficulty'], number> = { easy: 0, medium: 1, hard: 2 }

  switch (sortBy) {
    case 'random':
      return shuffle(questions)
    case 'number':
      return [...questions].sort((a, b) => a.id - b.id)
    case 'difficulty':
      return [...questions].sort((a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty])
    case 'unanswered-first':
      return [...questions].sort((a, b) => {
        const aAnswered = progress.answered[a.id] ? 1 : 0
        const bAnswered = progress.answered[b.id] ? 1 : 0
        return aAnswered - bAnswered
      })
    case 'incorrect-first':
      return [...questions].sort((a, b) => {
        const aIncorrect = progress.answered[a.id]?.outcome === 'incorrect' ? 0 : 1
        const bIncorrect = progress.answered[b.id]?.outcome === 'incorrect' ? 0 : 1
        return aIncorrect - bIncorrect
      })
    default:
      return questions
  }
}

export function computeOutcome(question: Question, selected: string[]): 'correct' | 'incorrect' {
  return isAnswerCorrect(question, selected) ? 'correct' : 'incorrect'
}

export function getSmartReviewQuestions(
  questions: Question[],
  progress: CertificationProgress,
  weakTopics: string[],
  count: number,
): Question[] {
  const incorrect = questions.filter((q) => progress.answered[q.id]?.outcome === 'incorrect')
  const unanswered = questions.filter((q) => !progress.answered[q.id])
  const weak = questions.filter(
    (q) => weakTopics.includes(q.topic) && progress.answered[q.id]?.outcome !== 'incorrect',
  )
  const marked = questions.filter((q) => progress.markedForReview.includes(q.id))

  const ordered: Question[] = []
  const seen = new Set<number>()
  const push = (list: Question[]) => {
    for (const q of list) {
      if (!seen.has(q.id)) {
        seen.add(q.id)
        ordered.push(q)
      }
    }
  }

  push(shuffle(incorrect))
  push(shuffle(unanswered))
  push(shuffle(weak))
  push(shuffle(marked))
  push(shuffle(questions))

  return ordered.slice(0, count)
}
