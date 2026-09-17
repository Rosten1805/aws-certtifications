import type { CertificationMeta } from '@/types/certification'
import Badge from '@/components/common/Badge'

interface CertificationCardProps {
  meta: CertificationMeta
  active: boolean
  available: boolean
  onSelect: () => void
}

export default function CertificationCard({ meta, active, available, onSelect }: CertificationCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={[
        'focus-ring flex flex-col items-start rounded-2xl border p-7 text-left transition-colors sm:p-8',
        active ? 'border-brand-orange bg-brand-orange/10' : 'border-surface-2 bg-surface-1 hover:border-surface-3',
      ].join(' ')}
    >
      <div className="flex w-full items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-orange">{meta.code}</span>
        {!available && <Badge tone="warning">Próximamente</Badge>}
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug text-text-primary">{meta.name}</h3>
      <p className="mt-3 text-sm text-text-secondary">
        {meta.totalQuestions} preguntas · {meta.durationMinutes} min · {meta.passingScore}/1000
      </p>
    </button>
  )
}
