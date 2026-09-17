import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getCertificationMeta, getTranslatedQuestionsForCertification } from '@/data'
import { examService } from '@/services/examService'
import { isAnswerCorrect } from '@/utils/scoring'
import { useCertification } from '@/stores/CertificationContext'
import type { ExamResult } from '@/types/exam'
import QuestionCard from '@/components/question/QuestionCard'
import Button from '@/components/common/Button'

type ReviewFilter = 'all' | 'incorrect' | 'correct' | 'unanswered' | 'marked'

const FILTERS: { id: ReviewFilter; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'incorrect', label: 'Incorrectas' },
  { id: 'correct', label: 'Correctas' },
  { id: 'unanswered', label: 'No respondidas' },
  { id: 'marked', label: 'Marcadas para revisar' },
]

export default function ExamReviewPage() {
  const { resultId } = useParams<{ resultId: string }>()
  const { language } = useCertification()
  const [result, setResult] = useState<ExamResult | null>(null)
  const [filter, setFilter] = useState<ReviewFilter>('all')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!resultId) return
    examService.findResultById(resultId).then(setResult)
  }, [resultId])

  const questions = useMemo(
    () => (result ? getTranslatedQuestionsForCertification(result.certification, language) : []),
    [result, language],
  )

  const byId = useMemo(() => new Map(questions.map((q) => [q.id, q])), [questions])

  const filteredIds = useMemo(() => {
    if (!result) return []
    return result.questionIds.filter((id) => {
      const question = byId.get(id)
      const answer = result.answers[id]
      if (!question) return false
      switch (filter) {
        case 'incorrect':
          return (answer?.selected.length ?? 0) > 0 && !isAnswerCorrect(question, answer.selected)
        case 'correct':
          return (answer?.selected.length ?? 0) > 0 && isAnswerCorrect(question, answer.selected)
        case 'unanswered':
          return !answer || answer.selected.length === 0
        case 'marked':
          return Boolean(answer?.markedForReview)
        default:
          return true
      }
    })
  }, [result, byId, filter])

  useEffect(() => {
    setIndex(0)
  }, [filter])

  if (!result) {
    return <p className="text-text-secondary">Cargando revisión…</p>
  }

  const currentMeta = getCertificationMeta(result.certification)
  const currentId = filteredIds[index]
  const currentQuestion = currentId ? byId.get(currentId) : null
  const currentAnswer = currentId ? result.answers[currentId] : undefined

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-text-primary">Revisión del examen</h1>
          <p className="mt-1 text-sm text-text-secondary">{currentMeta.name}</p>
        </div>
        <Link to={`/exam/results/${result.id}`}>
          <Button variant="secondary" size="sm">
            Volver al resultado
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={[
              'focus-ring rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
              filter === f.id
                ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
                : 'border-surface-3 bg-surface-2 text-text-secondary hover:text-text-primary',
            ].join(' ')}
          >
            {f.label}
          </button>
        ))}
      </div>

      {currentQuestion ? (
        <>
          <QuestionCard
            question={currentQuestion}
            domainName={currentMeta.domains.find((d) => d.id === currentQuestion.domain)?.name ?? currentQuestion.domain}
            number={result.questionIds.indexOf(currentQuestion.id) + 1}
            selected={currentAnswer?.selected ?? []}
            onSelectionChange={() => {}}
            revealed
            disabled
          />
          <div className="flex items-center justify-between">
            <Button
              variant="secondary"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
            >
              <ChevronLeft size={16} strokeWidth={1.75} />
              Anterior
            </Button>
            <span className="text-sm text-text-muted">
              {index + 1} / {filteredIds.length}
            </span>
            <Button
              variant="secondary"
              onClick={() => setIndex((i) => Math.min(filteredIds.length - 1, i + 1))}
              disabled={index >= filteredIds.length - 1}
            >
              Siguiente
              <ChevronRight size={16} strokeWidth={1.75} />
            </Button>
          </div>
        </>
      ) : (
        <p className="rounded-2xl border border-dashed border-surface-3 bg-surface-1 p-10 text-center text-text-secondary">
          No hay preguntas que coincidan con este filtro.
        </p>
      )}
    </div>
  )
}
