import type { SortOption } from '@/types/filters'

interface BankToolbarProps {
  search: string
  onSearchChange: (value: string) => void
  sortBy: SortOption
  onSortChange: (value: SortOption) => void
  found: number
  answered: number
  correct: number
  incorrect: number
}

export default function BankToolbar({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
  found,
  answered,
  correct,
  incorrect,
}: BankToolbarProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por texto o tema…"
            className="focus-ring w-full rounded-lg border border-surface-3 bg-surface-2 py-2.5 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted"
            aria-label="Buscar preguntas"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="focus-ring rounded-lg border border-surface-3 bg-surface-2 px-3 py-2.5 text-sm text-text-primary sm:w-64"
          aria-label="Ordenar preguntas"
        >
          <option value="random">Orden aleatorio</option>
          <option value="number">Por número</option>
          <option value="difficulty">Por dificultad</option>
          <option value="unanswered-first">No respondidas primero</option>
          <option value="incorrect-first">Falladas primero</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
        <span>
          <strong className="text-text-primary">{found}</strong> preguntas encontradas
        </span>
        <span>
          <strong className="text-text-primary">{answered}</strong> respondidas
        </span>
        <span className="text-success">
          <strong>{correct}</strong> correctas
        </span>
        <span className="text-danger">
          <strong>{incorrect}</strong> incorrectas
        </span>
      </div>
    </div>
  )
}
