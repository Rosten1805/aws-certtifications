import { useEffect, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useCertification } from '@/stores/CertificationContext'
import { useProgress } from '@/hooks/useProgress'
import { getSmartReviewQuestions, computeOutcome } from '@/services/questionService'
import { computeStats } from '@/services/statsService'
import { examService } from '@/services/examService'
import { useToast } from '@/stores/ToastContext'
import type { ExamResult } from '@/types/exam'
import type { Question } from '@/types/question'
import Button from '@/components/common/Button'
import QuestionCard from '@/components/question/QuestionCard'
import EmptyState from '@/components/common/EmptyState'
import LanguageToggle from '@/components/common/LanguageToggle'

const SESSION_SIZES = [10, 20, 30]

export default function SmartReviewPage() {
  const { meta, questions, hasQuestions } = useCertification()
  const { progress, recordAnswer } = useProgress(meta.id)
  const { showToast } = useToast()

  const [examResults, setExamResults] = useState<ExamResult[]>([])
  const [sessionQuestions, setSessionQuestions] = useState<Question[] | null>(null)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    examService.listResults(meta.id).then(setExamResults)
  }, [meta.id])

  const weakTopics = useMemo(() => {
    if (!progress) return []
    return computeStats(questions, progress, examResults, meta.domains).weakTopics.map((t) => t.topic)
  }, [questions, progress, examResults, meta.domains])

  function startSession(size: number) {
    if (!progress) return
    const selection = getSmartReviewQuestions(questions, progress, weakTopics, size)
    if (selection.length === 0) {
      showToast('No hay preguntas disponibles para una sesión de repaso', 'info')
      return
    }
    setSessionQuestions(selection)
    setIndex(0)
    setSelected([])
    setRevealed(false)
  }

  async function handleCheck() {
    if (!sessionQuestions) return
    const question = sessionQuestions[index]
    setRevealed(true)
    await recordAnswer(question.id, selected, computeOutcome(question, selected))
  }

  function handleNext() {
    if (!sessionQuestions) return
    if (index >= sessionQuestions.length - 1) {
      showToast('Sesión de repaso completada', 'success')
      setSessionQuestions(null)
      return
    }
    setIndex((i) => i + 1)
    setSelected([])
    setRevealed(false)
  }

  if (!hasQuestions) {
    return (
      <EmptyState
        title="Repaso inteligente próximamente"
        description={`Todavía no hay preguntas cargadas para ${meta.name}.`}
      />
    )
  }

  if (!sessionQuestions) {
    return (
      <div className="rounded-2xl border border-surface-2 bg-surface-1 p-6 text-center sm:p-10">
        <div className="flex justify-end">
          <LanguageToggle />
        </div>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-xl font-bold text-text-primary sm:text-2xl">Repaso inteligente</h1>
          <p className="mt-2 text-sm text-text-secondary">
            Genera una sesión rápida priorizando tus preguntas falladas, las que nunca has respondido, tus temas más
            débiles y las que tienes marcadas para revisar.
          </p>

          {weakTopics.length > 0 && (
            <p className="mt-3 text-xs text-text-muted">
              Puntos débiles detectados: <span className="text-brand-orange">{weakTopics.slice(0, 3).join(', ')}</span>
            </p>
          )}
        </div>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {SESSION_SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => startSession(size)}
              className="focus-ring rounded-2xl border border-surface-3 bg-surface-2 p-6 text-center transition-colors hover:border-brand-blue/50"
            >
              <p className="text-3xl font-bold text-text-primary">{size}</p>
              <p className="mt-1 text-xs text-text-secondary">preguntas</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const question = sessionQuestions[index]

  if (!question) {
    return (
      <EmptyState
        title="Sesión completada"
        description="Vuelve a generar una nueva sesión de repaso cuando quieras."
        action={<Button onClick={() => setSessionQuestions(null)}>Nueva sesión</Button>}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-lg font-bold text-text-primary">Repaso inteligente</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-text-muted">
            {index + 1} / {sessionQuestions.length}
          </span>
          <LanguageToggle />
        </div>
      </div>

      <QuestionCard
        question={question}
        domainName={meta.domains.find((d) => d.id === question.domain)?.name ?? question.domain}
        number={question.id}
        selected={selected}
        onSelectionChange={setSelected}
        revealed={revealed}
        onCheck={handleCheck}
      />

      {revealed && (
        <div className="flex justify-end">
          <Button onClick={handleNext}>
            {index >= sessionQuestions.length - 1 ? 'Finalizar sesión' : 'Siguiente'}
            {index < sessionQuestions.length - 1 && <ArrowRight size={16} strokeWidth={1.75} />}
          </Button>
        </div>
      )}
    </div>
  )
}
