import { useCallback, useEffect, useMemo, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { useCertification } from '@/stores/CertificationContext'
import { useProgress } from '@/hooks/useProgress'
import { useToast } from '@/stores/ToastContext'
import { examService } from '@/services/examService'
import { computeStats } from '@/services/statsService'
import type { ExamResult } from '@/types/exam'
import StatCard from '@/components/stats/StatCard'
import BarRow from '@/components/stats/BarRow'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'
import ConfirmModal from '@/components/common/ConfirmModal'
import EmptyState from '@/components/common/EmptyState'
import { formatDuration, formatDate } from '@/utils/format'

export default function StatsPage() {
  const { meta, questions } = useCertification()
  const { progress, loading } = useProgress(meta.id)
  const { showToast } = useToast()
  const [examResults, setExamResults] = useState<ExamResult[]>([])
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null)
  const [clearAllOpen, setClearAllOpen] = useState(false)

  const refreshResults = useCallback(() => {
    examService.listResults(meta.id).then(setExamResults)
  }, [meta.id])

  useEffect(() => {
    refreshResults()
  }, [refreshResults])

  async function handleDeleteResult(resultId: string) {
    await examService.deleteResult(meta.id, resultId)
    refreshResults()
    showToast('Simulacro eliminado', 'success')
  }

  async function handleClearAll() {
    await examService.clearResults(meta.id)
    refreshResults()
    showToast('Historial de simulacros borrado', 'success')
  }

  const stats = useMemo(() => {
    if (!progress) return null
    return computeStats(questions, progress, examResults, meta.domains)
  }, [questions, progress, examResults, meta.domains])

  if (loading || !stats) {
    return <p className="text-text-secondary">Cargando estadísticas…</p>
  }

  const hasActivity = stats.totalAnswered > 0 || stats.examsTaken > 0

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-bold text-text-primary">Mi progreso</h1>
        <p className="mt-1 text-sm text-text-secondary">{meta.name}</p>
      </div>

      {!hasActivity ? (
        <EmptyState
          title="Todavía no tienes actividad"
          description="Responde preguntas en el banco de preguntas o completa un simulacro para ver tus estadísticas aquí."
        />
      ) : (
        <>
          <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Preguntas respondidas" value={String(stats.totalAnswered)} />
            <StatCard label="Correctas" value={String(stats.totalCorrect)} tone="success" />
            <StatCard label="Incorrectas" value={String(stats.totalIncorrect)} tone="danger" />
            <StatCard label="Porcentaje global" value={`${stats.accuracy}%`} />
            <StatCard label="Simulacros realizados" value={String(stats.examsTaken)} />
            <StatCard label="Puntuación media" value={`${stats.averageScore}%`} />
            <StatCard label="Mejor puntuación" value={`${stats.bestScore}%`} tone="success" />
          </section>

          <section>
            <h2 className="text-sm font-semibold text-text-primary">Rendimiento por dominio</h2>
            <div className="mt-4 space-y-4 rounded-2xl border border-surface-2 bg-surface-1 p-5">
              {stats.domainStats.map((d) => (
                <BarRow
                  key={d.domain}
                  label={meta.domains.find((dom) => dom.id === d.domain)?.name ?? d.domain}
                  correct={d.correct}
                  total={d.answered}
                  percentage={d.percentage}
                />
              ))}
            </div>
          </section>

          {stats.serviceStats.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-text-primary">Rendimiento por servicios AWS</h2>
              <div className="mt-4 space-y-4 rounded-2xl border border-surface-2 bg-surface-1 p-5">
                {stats.serviceStats.map((s) => (
                  <BarRow key={s.service} label={s.service} correct={s.correct} total={s.answered} percentage={s.percentage} />
                ))}
              </div>
            </section>
          )}

          {stats.weakTopics.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-text-primary">Temas que deberías repasar</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {stats.weakTopics.map((t) => (
                  <Badge key={t.topic} tone="danger">
                    {t.topic} · {t.percentage}%
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {examResults.length > 0 && (
            <section>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-text-primary">Historial de simulacros</h2>
                <Button variant="secondary" size="sm" onClick={() => setClearAllOpen(true)}>
                  <Trash2 size={14} strokeWidth={1.75} />
                  Borrar todos
                </Button>
              </div>
              {/* Móvil: tarjetas apiladas (la tabla no cabe sin scroll horizontal oculto) */}
              <div className="mt-4 space-y-3 sm:hidden">
                {examResults.map((r) => (
                  <div key={r.id} className="rounded-2xl border border-surface-2 bg-surface-1 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm text-text-secondary">{formatDate(r.finishedAt)}</p>
                        <p className="mt-1 text-base font-semibold text-text-primary">
                          {r.correct} / {r.total} <span className="text-text-secondary">({r.percentage}%)</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDeleteTarget(r.id)}
                        className="focus-ring inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-danger-muted hover:text-danger"
                        aria-label="Eliminar simulacro"
                      >
                        <Trash2 size={16} strokeWidth={1.75} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Badge tone={r.passed ? 'success' : 'danger'}>{r.passed ? 'Aprobado' : 'No aprobado'}</Badge>
                      <span className="text-xs text-text-muted">{formatDuration(r.timeSpentSeconds)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Escritorio/tablet: tabla */}
              <div className="mt-4 hidden overflow-x-auto rounded-2xl border border-surface-2 bg-surface-1 sm:block">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="text-xs uppercase text-text-muted">
                    <tr className="border-b border-surface-2">
                      <th className="px-4 py-3 font-medium">Fecha</th>
                      <th className="px-4 py-3 font-medium">Resultado</th>
                      <th className="px-4 py-3 font-medium">Puntuación</th>
                      <th className="px-4 py-3 font-medium">Tiempo</th>
                      <th className="px-4 py-3 font-medium" />
                    </tr>
                  </thead>
                  <tbody>
                    {examResults.map((r) => (
                      <tr key={r.id} className="border-b border-surface-2 last:border-0">
                        <td className="px-4 py-3 text-text-secondary">{formatDate(r.finishedAt)}</td>
                        <td className="px-4 py-3">
                          <Badge tone={r.passed ? 'success' : 'danger'}>{r.passed ? 'Aprobado' : 'No aprobado'}</Badge>
                        </td>
                        <td className="px-4 py-3 text-text-primary">
                          {r.correct} / {r.total} ({r.percentage}%)
                        </td>
                        <td className="px-4 py-3 text-text-secondary">{formatDuration(r.timeSpentSeconds)}</td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => setDeleteTarget(r.id)}
                            className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-danger-muted hover:text-danger"
                            aria-label="Eliminar simulacro"
                          >
                            <Trash2 size={15} strokeWidth={1.75} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </>
      )}

      <ConfirmModal
        open={deleteTarget !== null}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => {
          if (deleteTarget) handleDeleteResult(deleteTarget)
        }}
        title="¿Eliminar este simulacro?"
        description="Se borrará este resultado de tu historial de forma permanente. Esta acción no se puede deshacer."
        confirmLabel="Eliminar"
      />

      <ConfirmModal
        open={clearAllOpen}
        onClose={() => setClearAllOpen(false)}
        onConfirm={handleClearAll}
        title="¿Borrar todos los simulacros?"
        description={`Se eliminarán los ${examResults.length} simulacros guardados de ${meta.name}. Esta acción no se puede deshacer.`}
        confirmLabel="Borrar todos"
      />
    </div>
  )
}
