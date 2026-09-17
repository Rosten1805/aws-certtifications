import type { CertificationDomain } from '@/types/certification'
import type { QuestionFilters } from '@/types/filters'

interface FilterPanelProps {
  filters: QuestionFilters
  onChange: (filters: QuestionFilters) => void
  domains: CertificationDomain[]
  services: string[]
}

const selectClasses =
  'focus-ring w-full rounded-lg border border-surface-3 bg-surface-2 px-3 py-2 text-sm text-text-primary'

const labelClasses = 'mb-1.5 block text-xs font-medium uppercase tracking-wide text-text-muted'

export default function FilterPanel({ filters, onChange, domains, services }: FilterPanelProps) {
  function update<K extends keyof QuestionFilters>(key: K, value: QuestionFilters[K]) {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <label className={labelClasses} htmlFor="filter-domain">
          Dominio
        </label>
        <select
          id="filter-domain"
          className={selectClasses}
          value={filters.domain}
          onChange={(e) => update('domain', e.target.value)}
        >
          <option value="all">Todos</option>
          {domains.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="filter-service">
          Servicio AWS
        </label>
        <select
          id="filter-service"
          className={selectClasses}
          value={filters.service}
          onChange={(e) => update('service', e.target.value)}
        >
          <option value="all">Todos</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="filter-difficulty">
          Dificultad
        </label>
        <select
          id="filter-difficulty"
          className={selectClasses}
          value={filters.difficulty}
          onChange={(e) => update('difficulty', e.target.value as QuestionFilters['difficulty'])}
        >
          <option value="all">Todas</option>
          <option value="easy">Fácil</option>
          <option value="medium">Intermedia</option>
          <option value="hard">Difícil</option>
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="filter-status">
          Estado
        </label>
        <select
          id="filter-status"
          className={selectClasses}
          value={filters.status}
          onChange={(e) => update('status', e.target.value as QuestionFilters['status'])}
        >
          <option value="all">Todas</option>
          <option value="unanswered">Sin responder</option>
          <option value="correct">Correctas</option>
          <option value="incorrect">Incorrectas</option>
          <option value="marked">Marcadas para revisar</option>
          <option value="favorite">Favoritas</option>
        </select>
      </div>
    </div>
  )
}
