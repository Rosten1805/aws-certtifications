import type { CertificationDomain } from '@/types/certification'

export default function DomainCard({ domain, index }: { domain: CertificationDomain; index: number }) {
  return (
    <div className="rounded-xl border border-surface-2 bg-surface-1 p-3">
      <div className="flex items-center justify-between">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-surface-2 text-[11px] font-semibold text-text-secondary">
          {index + 1}
        </span>
        <span className="text-base font-bold text-brand-orange">{domain.weight}%</span>
      </div>
      <h3 className="mt-2 text-xs font-medium leading-snug text-text-secondary">{domain.name}</h3>
    </div>
  )
}
