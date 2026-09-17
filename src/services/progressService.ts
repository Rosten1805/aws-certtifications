import { storage } from '@/services/storage/storage'
import { STORAGE_KEYS } from '@/services/storage/storageKeys'
import type { CertificationProgress, QuestionOutcome } from '@/types/progress'

type ProgressStore = Record<string, CertificationProgress>

function emptyProgress(certification: string): CertificationProgress {
  return {
    certification,
    answered: {},
    favorites: [],
    markedForReview: [],
  }
}

async function readStore(): Promise<ProgressStore> {
  return (await storage.getItem<ProgressStore>(STORAGE_KEYS.progress)) ?? {}
}

async function writeStore(store: ProgressStore): Promise<void> {
  await storage.setItem(STORAGE_KEYS.progress, store)
}

export const progressService = {
  async getProgress(certification: string): Promise<CertificationProgress> {
    const store = await readStore()
    return store[certification] ?? emptyProgress(certification)
  },

  async recordAnswer(
    certification: string,
    questionId: number,
    selected: string[],
    outcome: QuestionOutcome,
  ): Promise<CertificationProgress> {
    const store = await readStore()
    const current = store[certification] ?? emptyProgress(certification)
    const previous = current.answered[questionId]
    const updated: CertificationProgress = {
      ...current,
      answered: {
        ...current.answered,
        [questionId]: {
          questionId,
          lastSelected: selected,
          outcome,
          attempts: (previous?.attempts ?? 0) + 1,
          updatedAt: Date.now(),
        },
      },
    }
    store[certification] = updated
    await writeStore(store)
    return updated
  },

  async toggleFavorite(certification: string, questionId: number): Promise<CertificationProgress> {
    const store = await readStore()
    const current = store[certification] ?? emptyProgress(certification)
    const isFavorite = current.favorites.includes(questionId)
    const updated: CertificationProgress = {
      ...current,
      favorites: isFavorite
        ? current.favorites.filter((id) => id !== questionId)
        : [...current.favorites, questionId],
    }
    store[certification] = updated
    await writeStore(store)
    return updated
  },

  async toggleMarkedForReview(certification: string, questionId: number): Promise<CertificationProgress> {
    const store = await readStore()
    const current = store[certification] ?? emptyProgress(certification)
    const isMarked = current.markedForReview.includes(questionId)
    const updated: CertificationProgress = {
      ...current,
      markedForReview: isMarked
        ? current.markedForReview.filter((id) => id !== questionId)
        : [...current.markedForReview, questionId],
    }
    store[certification] = updated
    await writeStore(store)
    return updated
  },

  async resetProgress(certification: string): Promise<void> {
    const store = await readStore()
    store[certification] = emptyProgress(certification)
    await writeStore(store)
  },
}
