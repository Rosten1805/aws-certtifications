import type { ReactNode } from 'react'

type BadgeTone = 'neutral' | 'blue' | 'orange' | 'success' | 'danger' | 'warning'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const TONE_CLASSES: Record<BadgeTone, string> = {
  neutral: 'bg-surface-2 text-text-secondary',
  blue: 'bg-brand-blue/15 text-brand-blue',
  orange: 'bg-brand-orange/15 text-brand-orange',
  success: 'bg-success-muted text-success',
  danger: 'bg-danger-muted text-danger',
  warning: 'bg-warning-muted text-warning',
}

export default function Badge({ children, tone = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
        TONE_CLASSES[tone],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
