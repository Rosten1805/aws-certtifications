import { useCallback, useEffect, useState } from 'react'
import { progressService } from '@/services/progressService'
import type { CertificationProgress, QuestionOutcome } from '@/types/progress'

export function useProgress(certification: string) {
  const [progress, setProgress] = useState<CertificationProgress | null>(null)
  const [loading, setLoading] = useState(true)

  const reload = useCallback(async () => {
    setLoading(true)
    const data = await progressService.getProgress(certification)
    setProgress(data)
    setLoading(false)
  }, [certification])

  useEffect(() => {
    reload()
  }, [reload])

  const recordAnswer = useCallback(
    async (questionId: number, selected: string[], outcome: QuestionOutcome) => {
      const updated = await progressService.recordAnswer(certification, questionId, selected, outcome)
      setProgress(updated)
    },
    [certification],
  )

  const toggleFavorite = useCallback(
    async (questionId: number) => {
      const updated = await progressService.toggleFavorite(certification, questionId)
      setProgress(updated)
    },
    [certification],
  )

  const toggleMarkedForReview = useCallback(
    async (questionId: number) => {
      const updated = await progressService.toggleMarkedForReview(certification, questionId)
      setProgress(updated)
    },
    [certification],
  )

  return { progress, loading, reload, recordAnswer, toggleFavorite, toggleMarkedForReview }
}
