import { Timer as TimerIcon } from 'lucide-react'
import { formatCountdown } from '@/utils/format'

export default function ExamTimer({ seconds, warning }: { seconds: number; warning?: boolean }) {
  const isLow = seconds <= 5 * 60

  return (
    <div
      className={[
        'flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-sm font-semibold tabular-nums',
        isLow || warning
          ? 'border-danger/40 bg-danger-muted text-danger'
          : 'border-surface-3 bg-surface-2 text-text-primary',
      ].join(' ')}
      role="timer"
      aria-label="Tiempo restante"
    >
      <TimerIcon size={16} strokeWidth={1.75} aria-hidden />
      {formatCountdown(seconds)}
    </div>
  )
}
