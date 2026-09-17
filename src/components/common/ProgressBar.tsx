interface ProgressBarProps {
  value: number
  max?: number
  tone?: 'blue' | 'orange' | 'success' | 'danger' | 'warning'
  className?: string
  label?: string
}

const TONE_CLASSES = {
  blue: 'bg-brand-blue',
  orange: 'bg-brand-orange',
  success: 'bg-success',
  danger: 'bg-danger',
  warning: 'bg-warning',
}

export default function ProgressBar({ value, max = 100, tone = 'blue', className = '', label }: ProgressBarProps) {
  const percentage = max === 0 ? 0 : Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={className}>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-surface-2"
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={['h-full rounded-full transition-all duration-300', TONE_CLASSES[tone]].join(' ')}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
