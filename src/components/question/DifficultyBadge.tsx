import Badge from '@/components/common/Badge'
import type { Difficulty } from '@/types/question'

const LABELS: Record<Difficulty, string> = {
  easy: 'Fácil',
  medium: 'Intermedia',
  hard: 'Difícil',
}

const TONES: Record<Difficulty, 'success' | 'warning' | 'danger'> = {
  easy: 'success',
  medium: 'warning',
  hard: 'danger',
}

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return <Badge tone={TONES[difficulty]}>{LABELS[difficulty]}</Badge>
}
