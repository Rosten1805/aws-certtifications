import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ModeCardProps {
  icon: ReactNode
  title: string
  description: string
  to: string
  ctaLabel: string
  accent?: 'blue' | 'orange'
  stat?: string
}

export default function ModeCard({ icon, title, description, to, ctaLabel, accent = 'blue', stat }: ModeCardProps) {
  return (
    <Link
      to={to}
      className="focus-ring group flex flex-col rounded-2xl border border-surface-2 bg-surface-1 p-6 transition-colors hover:border-surface-3"
    >
      <div
        className={[
          'flex h-11 w-11 items-center justify-center rounded-xl text-lg',
          accent === 'orange' ? 'bg-brand-orange/15 text-brand-orange' : 'bg-brand-blue/15 text-brand-blue',
        ].join(' ')}
      >
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
      {stat && <p className="mt-3 text-xs font-medium text-text-muted">{stat}</p>}
      <span
        className={[
          'mt-5 inline-flex items-center gap-1 text-sm font-semibold',
          accent === 'orange' ? 'text-brand-orange' : 'text-brand-blue',
        ].join(' ')}
      >
        {ctaLabel}
        <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
