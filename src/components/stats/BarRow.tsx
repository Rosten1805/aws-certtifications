import ProgressBar from '@/components/common/ProgressBar'

interface BarRowProps {
  label: string
  correct: number
  total: number
  percentage: number
}

export default function BarRow({ label, correct, total, percentage }: BarRowProps) {
  const tone = percentage >= 75 ? 'success' : percentage >= 50 ? 'orange' : 'danger'

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-text-primary">{label}</span>
        <span className="text-text-secondary">
          {correct} / {total} · {percentage}%
        </span>
      </div>
      <ProgressBar value={percentage} tone={tone} label={label} />
    </div>
  )
}
