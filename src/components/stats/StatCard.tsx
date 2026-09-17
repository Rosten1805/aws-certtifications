export default function StatCard({ label, value, tone = 'default' }: { label: string; value: string; tone?: 'default' | 'success' | 'danger' }) {
  const toneClass = tone === 'success' ? 'text-success' : tone === 'danger' ? 'text-danger' : 'text-text-primary'

  return (
    <div className="rounded-xl border border-surface-2 bg-surface-1 p-4">
      <p className={['text-2xl font-bold', toneClass].join(' ')}>{value}</p>
      <p className="mt-1 text-xs text-text-secondary">{label}</p>
    </div>
  )
}
