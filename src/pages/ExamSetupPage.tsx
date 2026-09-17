import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCertification } from '@/stores/CertificationContext'
import { examService } from '@/services/examService'
import { useToast } from '@/stores/ToastContext'
import Button from '@/components/common/Button'
import EmptyState from '@/components/common/EmptyState'
import LanguageToggle from '@/components/common/LanguageToggle'
import type { ExamVariant } from '@/types/exam'

export default function ExamSetupPage() {
  const { meta, questions, hasQuestions } = useCertification()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [variant, setVariant] = useState<ExamVariant>('exam-1')
  const [hasPausedExam, setHasPausedExam] = useState(false)

  const sequentialCount = useMemo(
    () => examService.getSequentialVariantCount(questions, meta),
    [questions, meta],
  )
  const sequentialVariants = useMemo(
    () =>
      Array.from({ length: sequentialCount }, (_, i) => ({
        id: `exam-${i + 1}` as ExamVariant,
        label: String(i + 1),
      })),
    [sequentialCount],
  )

  useEffect(() => {
    examService.getCurrentExam().then((session) => {
      setHasPausedExam(Boolean(session && session.status !== 'finished'))
    })
  }, [])

  async function handleStart() {
    const session = examService.buildSession(meta.id, variant, questions, meta)
    await examService.saveCurrentExam(session)
    navigate('/exam/run')
  }

  async function handleResume() {
    navigate('/exam/run')
  }

  async function handleDiscardPaused() {
    await examService.clearCurrentExam()
    setHasPausedExam(false)
    showToast('Simulacro anterior descartado', 'info')
  }

  const availableQuestions = questions.length
  const examLength = Math.min(meta.totalQuestions, availableQuestions)

  if (!hasQuestions) {
    return (
      <EmptyState
        title="Simulacro próximamente"
        description={`Todavía no hay preguntas cargadas para ${meta.name}. Elige otra certificación desde el inicio para practicar mientras tanto.`}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-surface-2 bg-surface-1 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">{meta.code}</p>
            <h1 className="mt-2 text-xl font-bold text-text-primary sm:text-2xl">{meta.name}</h1>
          </div>
          <LanguageToggle />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-surface-2 p-4">
            <p className="text-2xl font-bold text-text-primary">{examLength}</p>
            <p className="text-xs text-text-secondary">preguntas</p>
          </div>
          <div className="rounded-xl bg-surface-2 p-4">
            <p className="text-2xl font-bold text-text-primary">{meta.durationMinutes} min</p>
            <p className="text-xs text-text-secondary">de duración</p>
          </div>
          <div className="rounded-xl bg-surface-2 p-4">
            <p className="text-2xl font-bold text-text-primary">{meta.passingScore} / 1000</p>
            <p className="text-xs text-text-secondary">puntuación mínima</p>
          </div>
        </div>

        {availableQuestions < meta.totalQuestions && (
          <p className="mt-4 rounded-lg border border-brand-blue/30 bg-brand-blue/10 px-3 py-2 text-xs text-brand-blue">
            El banco de preguntas de demostración tiene {availableQuestions} preguntas. El simulacro usará todas las
            disponibles en lugar de las {meta.totalQuestions} del examen real.
          </p>
        )}

        {hasPausedExam && (
          <div className="mt-5 flex flex-col gap-2 rounded-xl border border-warning/30 bg-warning-muted p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-warning">Tienes un simulacro pausado o en curso.</p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" onClick={handleDiscardPaused}>
                Descartar
              </Button>
              <Button size="sm" onClick={handleResume}>
                Continuar
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-surface-2 bg-surface-1 p-6 sm:p-8">
        <h2 className="text-sm font-semibold text-text-primary">Selecciona un simulacro</h2>
        <p className="mt-1 text-xs text-text-secondary">
          Cada simulacro reparte las {examLength} preguntas entre los dominios según sus pesos oficiales.
          Los simulacros numerados rotan por el banco de preguntas: jugados en orden, repiten el mínimo
          de preguntas posible entre sí.
        </p>

        <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-3">
          {sequentialVariants.map((v) => (
            <label
              key={v.id}
              className={[
                'flex cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl border px-2 py-4 text-center',
                variant === v.id ? 'border-brand-blue bg-brand-blue/10' : 'border-surface-3 bg-surface-2',
              ].join(' ')}
            >
              <input
                type="radio"
                name="variant"
                className="sr-only"
                checked={variant === v.id}
                onChange={() => setVariant(v.id)}
              />
              <span className="text-base font-bold text-text-primary">{v.label}</span>
              <span className="text-[10px] uppercase tracking-wide text-text-secondary">Simulacro</span>
            </label>
          ))}
        </div>

        <label
          className={[
            'mt-3 flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3',
            variant === 'random' ? 'border-brand-blue bg-brand-blue/10' : 'border-surface-3 bg-surface-2',
          ].join(' ')}
        >
          <input
            type="radio"
            name="variant"
            className="mt-1 accent-[var(--color-brand-blue)]"
            checked={variant === 'random'}
            onChange={() => setVariant('random')}
          />
          <span>
            <span className="block text-sm font-semibold text-text-primary">Simulacro aleatorio</span>
            <span className="block text-xs text-text-secondary">
              Preguntas seleccionadas por dominio según los pesos oficiales, en orden aleatorio. Puedes
              repetirlo tantas veces como quieras.
            </span>
          </span>
        </label>

        <Button className="mt-6 w-full" size="lg" onClick={handleStart}>
          Iniciar examen
        </Button>
      </div>
    </div>
  )
}
