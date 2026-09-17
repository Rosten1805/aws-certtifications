import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Flag, Menu, X } from 'lucide-react'
import { useCertification } from '@/stores/CertificationContext'
import { examService } from '@/services/examService'
import { useCountdown } from '@/hooks/useCountdown'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { useToast } from '@/stores/ToastContext'
import type { ExamSession } from '@/types/exam'
import ExamTimer from '@/components/exam/ExamTimer'
import QuestionNavigatorGrid from '@/components/exam/QuestionNavigatorGrid'
import FinishExamModal from '@/components/exam/FinishExamModal'
import QuestionCard from '@/components/question/QuestionCard'
import Button from '@/components/common/Button'
import ProgressBar from '@/components/common/ProgressBar'

export default function ExamRunnerPage() {
  const { meta, questions } = useCertification()
  const navigate = useNavigate()
  const { showToast } = useToast()

  const [session, setSession] = useState<ExamSession | null>(null)
  const [loading, setLoading] = useState(true)
  const [finishModalOpen, setFinishModalOpen] = useState(false)
  const [navigatorOpen, setNavigatorOpen] = useState(false)
  const [finishing, setFinishing] = useState(false)

  useEffect(() => {
    examService.getCurrentExam().then((s) => {
      if (!s || s.status === 'finished') {
        navigate('/exam', { replace: true })
        return
      }
      setSession(s)
      setLoading(false)
    })
  }, [navigate])

  const persist = useCallback(async (next: ExamSession) => {
    setSession(next)
    await examService.saveCurrentExam(next)
  }, [])

  const handleFinish = useCallback(async () => {
    if (!session || finishing) return
    setFinishing(true)
    const result = await examService.finish(session, questions, meta)
    navigate(`/exam/results/${result.id}`, { replace: true })
  }, [session, finishing, questions, meta, navigate])

  const remainingSeconds = useCountdown(
    () => (session ? examService.remainingSeconds(session) : 0),
    session?.status === 'in-progress',
    () => {
      showToast('Se ha agotado el tiempo. Finalizando examen…', 'info')
      handleFinish()
    },
  )

  const byId = useMemo(() => new Map(questions.map((q) => [q.id, q])), [questions])
  const currentQuestion = session ? byId.get(session.questionIds[session.currentIndex]) : null

  const answeredCount = session ? Object.values(session.answers).filter((a) => a.selected.length > 0).length : 0
  const markedCount = session ? Object.values(session.answers).filter((a) => a.markedForReview).length : 0

  function handleSelectionChange(newSelected: string[]) {
    if (!session || !currentQuestion) return
    persist(examService.setAnswer(session, currentQuestion.id, newSelected))
  }

  function handleToggleMark() {
    if (!session || !currentQuestion) return
    persist(examService.toggleMark(session, currentQuestion.id))
  }

  function handleNavigate(index: number) {
    if (!session) return
    persist(examService.goToIndex(session, index))
    setNavigatorOpen(false)
  }

  function handlePrevious() {
    if (!session) return
    handleNavigate(session.currentIndex - 1)
  }

  function handleNext() {
    if (!session) return
    handleNavigate(session.currentIndex + 1)
  }

  async function handlePauseToggle() {
    if (!session) return
    const next = session.status === 'in-progress' ? examService.pause(session) : examService.resume(session)
    await persist(next)
  }

  useKeyboardShortcuts(
    {
      '1': () => handleSelectionChange(applyShortcut('A')),
      '2': () => handleSelectionChange(applyShortcut('B')),
      '3': () => handleSelectionChange(applyShortcut('C')),
      '4': () => handleSelectionChange(applyShortcut('D')),
      ArrowLeft: handlePrevious,
      ArrowRight: handleNext,
    },
    session?.status === 'in-progress',
  )

  function applyShortcut(letter: string): string[] {
    if (!currentQuestion || !session) return []
    const current = session.answers[currentQuestion.id]?.selected ?? []
    const isMultiple = currentQuestion.type === 'multiple'
    if (!isMultiple) return [letter]
    if (current.includes(letter)) return current.filter((s) => s !== letter)
    if (current.length < currentQuestion.correctAnswers.length) return [...current, letter]
    return current
  }

  if (loading || !session || !currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-0">
        <p className="text-text-secondary">Cargando examen…</p>
      </div>
    )
  }

  const isPaused = session.status === 'paused'
  const selected = session.answers[currentQuestion.id]?.selected ?? []
  const isMarked = session.answers[currentQuestion.id]?.markedForReview ?? false

  return (
    <div className="min-h-screen bg-surface-0 text-text-primary">
      <header className="sticky top-0 z-30 border-b border-surface-2 bg-surface-0/95 px-6 py-3 backdrop-blur sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">{meta.code}</p>
              <p className="text-sm font-medium text-text-primary">{meta.name}</p>
            </div>
            <div className="flex items-center gap-3">
              <ExamTimer seconds={remainingSeconds} />
              <Button size="sm" variant="secondary" onClick={handlePauseToggle}>
                {isPaused ? 'Reanudar' : 'Pausar'}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="lg:hidden"
                onClick={() => setNavigatorOpen(true)}
                aria-label="Ver navegador de preguntas"
              >
                <Menu size={16} strokeWidth={1.75} />
                Preguntas
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap text-xs text-text-secondary">
              Pregunta {session.currentIndex + 1} / {session.questionIds.length}
            </span>
            <ProgressBar value={session.currentIndex + 1} max={session.questionIds.length} className="flex-1" tone="orange" />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 py-6 sm:px-10 lg:grid-cols-[240px_1fr] lg:px-16">
        <aside className="hidden lg:block">
          <div className="sticky top-32 rounded-2xl border border-surface-2 bg-surface-1 p-4">
            <QuestionNavigatorGrid
              questionIds={session.questionIds}
              answers={session.answers}
              currentIndex={session.currentIndex}
              onNavigate={handleNavigate}
            />
          </div>
        </aside>

        <div>
          {isPaused ? (
            <div className="rounded-2xl border border-warning/30 bg-warning-muted p-10 text-center">
              <p className="text-lg font-semibold text-warning">Examen en pausa</p>
              <p className="mt-2 text-sm text-warning/90">El tiempo restante se ha guardado. Pulsa reanudar para continuar.</p>
              <Button className="mt-5" onClick={handlePauseToggle}>
                Reanudar simulacro
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleToggleMark}
                  aria-pressed={isMarked}
                  className={[
                    'focus-ring mb-3 flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors',
                    isMarked
                      ? 'border-warning/50 bg-warning-muted text-warning'
                      : 'border-surface-3 bg-surface-2 text-text-secondary hover:text-text-primary',
                  ].join(' ')}
                >
                  <Flag size={16} strokeWidth={1.75} fill={isMarked ? 'currentColor' : 'none'} />
                  Marcar para revisar
                </button>
              </div>

              <QuestionCard
                question={currentQuestion}
                domainName={meta.domains.find((d) => d.id === currentQuestion.domain)?.name ?? currentQuestion.domain}
                number={session.currentIndex + 1}
                selected={selected}
                onSelectionChange={handleSelectionChange}
                revealed={false}
                showExplanation={false}
              />

              <div className="mt-6 flex items-center justify-between gap-3">
                <Button variant="secondary" onClick={handlePrevious} disabled={session.currentIndex === 0}>
                  <ChevronLeft size={16} strokeWidth={1.75} />
                  Anterior
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleNext}
                  disabled={session.currentIndex === session.questionIds.length - 1}
                >
                  Siguiente
                  <ChevronRight size={16} strokeWidth={1.75} />
                </Button>
              </div>

              <div className="mt-8 border-t border-surface-2 pt-6 text-center">
                <Button variant="danger" onClick={() => setFinishModalOpen(true)}>
                  Finalizar examen
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {navigatorOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setNavigatorOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto bg-surface-1 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-text-primary">Preguntas</h2>
              <button
                type="button"
                onClick={() => setNavigatorOpen(false)}
                className="focus-ring text-text-secondary"
                aria-label="Cerrar"
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>
            <QuestionNavigatorGrid
              questionIds={session.questionIds}
              answers={session.answers}
              currentIndex={session.currentIndex}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      )}

      <FinishExamModal
        open={finishModalOpen}
        onClose={() => setFinishModalOpen(false)}
        onConfirm={handleFinish}
        answered={answeredCount}
        total={session.questionIds.length}
        marked={markedCount}
      />
    </div>
  )
}
