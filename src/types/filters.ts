export type QuestionStatusFilter = 'all' | 'unanswered' | 'correct' | 'incorrect' | 'marked' | 'favorite'

export type SortOption = 'random' | 'number' | 'difficulty' | 'unanswered-first' | 'incorrect-first'

export interface QuestionFilters {
  domain: string
  service: string
  difficulty: 'all' | 'easy' | 'medium' | 'hard'
  status: QuestionStatusFilter
  search: string
}

export const DEFAULT_FILTERS: QuestionFilters = {
  domain: 'all',
  service: 'all',
  difficulty: 'all',
  status: 'all',
  search: '',
}
