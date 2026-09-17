import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { useCertification } from '@/stores/CertificationContext'
import { useProgress } from '@/hooks/useProgress'
import { useToast } from '@/stores/ToastContext'
import { filterQuestions, getAllServices, sortQuestions, computeOutcome } from '@/services/questionService'
import { shuffle } from '@/utils/shuffle'
import type { QuestionFilters, QuestionStatusFilter, SortOption } from '@/types/filters'
import { DEFAULT_FILTERS } from '@/types/filters'
import type { QuestionProgressEntry } from '@/types/progress'
import FilterPanel from '@/components/bank/FilterPanel'
import BankToolbar from '@/components/bank/BankToolbar'
import BankQuestionItem from '@/components/bank/BankQuestionItem'
import EmptyState from '@/components/common/EmptyState'
import LanguageToggle from '@/components/common/LanguageToggle'

const STATUS_VALUES: QuestionStatusFilter[] = ['all', 'unanswered', 'correct', 'incorrect', 'marked', 'favorite']

export default function QuestionBankPage() {
  const { meta, questions } = useCertification()
  const { progress, toggleFavorite, toggleMarkedForReview } = useProgress(meta.id)
  const { showToast } = useToast()
  const [searchParams] = useSearchParams()

  const initialStatus = searchParams.get('status')
  const [filters, setFilters] = useState<QuestionFilters>(() => ({
    ...DEFAULT_FILTERS,
    status: initialStatus && STATUS_VALUES.includes(initialStatus as QuestionStatusFilter)
      ? (initialStatus as QuestionStatusFilter)
      : DEFAULT_FILTERS.status,
  }))
  const [sortBy, setSortBy] = useState<SortOption>('number')
  const [randomOrder, setRandomOrder] = useState<number[]>(() => shuffle(questions.map((q) => q.id)))
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Las respuestas del banco de preguntas se guardan solo en memoria, no en localStorage:
  // se pierden al salir de la página para que, cada vez que entres, las preguntas
  // vuelvan a aparecer sin responder. "Guardar" y "Marcar para revisar" sí persisten
  // (vienen de useProgress), igual que los simulacros y "Mi progreso".
  const [sessionAnswered, setSessionAnswered] = useState<Record<number, QuestionProgressEntry>>({})

  const safeProgress = useMemo(
    () => progress ?? { certification: meta.id, answered: {}, favorites: [], markedForReview: [] },
    [progress, meta.id],
  )

  const sessionProgress = useMemo(
    () => ({ ...safeProgress, answered: sessionAnswered }),
    [safeProgress, sessionAnswered],
  )

  const services = useMemo(() => getAllServices(questions), [questions])

  const list = useMemo(() => {
    const filtered = filterQuestions(questions, sessionProgress, filters)
    if (sortBy === 'random') {
      const orderMap = new Map(randomOrder.map((id, i) => [id, i]))
      return [...filtered].sort((a, b) => (orderMap.get(a.id) ?? 0) - (orderMap.get(b.id) ?? 0))
    }
    return sortQuestions(filtered, sessionProgress, sortBy)
  }, [questions, sessionProgress, filters, sortBy, randomOrder])

  useEffect(() => {
    if (sortBy === 'random') {
      setRandomOrder(shuffle(questions.map((q) => q.id)))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, filters.domain, filters.service, filters.difficulty, filters.search])

  // Muestra el botón "volver arriba" una vez el usuario se ha desplazado por la lista larga.
  useEffect(() => {
    function onScroll() {
      setShowBackToTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleCheck(questionId: number, selected: string[]) {
    const question = questions.find((q) => q.id === questionId)
    if (!question) return
    const outcome = computeOutcome(question, selected)
    setSessionAnswered((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        lastSelected: selected,
        outcome,
        attempts: (prev[questionId]?.attempts ?? 0) + 1,
        updatedAt: Date.now(),
      },
    }))
  }

  async function handleToggleFavorite(questionId: number) {
    const wasFavorite = safeProgress.favorites.includes(questionId)
    await toggleFavorite(questionId)
    showToast(wasFavorite ? 'Pregunta quitada de guardadas' : 'Pregunta guardada', 'success')
  }

  async function handleToggleMarked(questionId: number) {
    const wasMarked = safeProgress.markedForReview.includes(questionId)
    await toggleMarkedForReview(questionId)
    showToast(wasMarked ? 'Marca eliminada' : 'Pregunta marcada para revisar', 'info')
  }

  const stats = useMemo(() => {
    const answeredList = list.filter((q) => sessionAnswered[q.id])
    const correct = answeredList.filter((q) => sessionAnswered[q.id]?.outcome === 'correct').length
    return {
      found: list.length,
      answered: answeredList.length,
      correct,
      incorrect: answeredList.length - correct,
    }
  }, [list, sessionAnswered])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-text-primary">Banco de preguntas</h1>
          <p className="mt-1 text-sm text-text-secondary">{meta.name}</p>
        </div>
        <LanguageToggle />
      </div>

      <div className="rounded-2xl border border-surface-2 bg-surface-1 p-5">
        <FilterPanel filters={filters} onChange={setFilters} domains={meta.domains} services={services} />
        <div className="mt-5 border-t border-surface-2 pt-5">
          <BankToolbar
            search={filters.search}
            onSearchChange={(search) => setFilters((f) => ({ ...f, search }))}
            sortBy={sortBy}
            onSortChange={setSortBy}
            {...stats}
          />
        </div>
      </div>

      {list.length > 0 ? (
        <div className="space-y-4">
          {list.map((question, index) => (
            <BankQuestionItem
              key={question.id}
              question={question}
              domainName={meta.domains.find((d) => d.id === question.domain)?.name ?? question.domain}
              number={index + 1}
              answeredEntry={sessionAnswered[question.id]}
              isFavorite={safeProgress.favorites.includes(question.id)}
              isMarked={safeProgress.markedForReview.includes(question.id)}
              onCheck={handleCheck}
              onToggleFavorite={handleToggleFavorite}
              onToggleMarked={handleToggleMarked}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No hay preguntas con estos filtros"
          description="Prueba a cambiar los filtros de dominio, dificultad, servicio o estado para encontrar preguntas."
        />
      )}

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus-ring fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-surface-3 bg-surface-2 text-text-secondary shadow-lg transition-colors hover:border-surface-4 hover:text-text-primary"
          aria-label="Volver arriba"
        >
          <ArrowUp size={18} strokeWidth={1.75} />
        </button>
      )}
    </div>
  )
}
