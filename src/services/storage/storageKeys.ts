export const STORAGE_KEYS = {
  progress: 'saa-progress',
  exams: 'saa-exams',
  currentExam: 'saa-current-exam',
  settings: 'saa-settings',
} as const

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS]
