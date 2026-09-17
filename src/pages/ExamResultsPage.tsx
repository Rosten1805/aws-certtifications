import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCertificationMeta } from '@/data'
import { examService } from '@/services/examService'
import type { ExamResult } from '@/types/exam'
import Button from '@/components/common/Button'
import BarRow from '@/components/stats/BarRow'
import StatCard from '@/components/stats/StatCard'
import { formatDuration } from '@/utils/format'

export default function ExamResultsPage() {
  const { resultId } = useParams<{ resultId: string }>()
  const [result, setResult] = useState<ExamResult | null | 'not-found'>(null)

  useEffect(() => {
    if (!resultId) return
    examService.findResultById(resultId).then((r) => setResult(r ?? 'not-found'))
  }, [resultId])

  if (result === null) {
    return <p className="text-text-secondary">Cargando resultado…</p>
  }

  if (result === 'not-found') {
    return (
      <div className="text-center">
        <p className="text-text-secondary">No se ha encontrado este resultado de examen.</p>
        <Link to="/exam" className="mt-4 inline-block text-brand-blue hover:underline">
          Volver a simulacros
        </Link>
      </div>
    )
  }

  const meta = getCertificationMeta(result.certification)

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-surface-2 bg-surface-1 p-6 text-center sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">Resultado</p>
        <p className="mt-3 text-4xl font-extrabold text-text-primary">
          {result.correct} / {result.total}
        </p>
        <p className="mt-1 text-lg font-semibold text-text-secondary">{result.percentage}%</p>
        <span
          className={[
            'mt-4 inline-block rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wide',
            result.passed ? 'bg-success-muted text-success' : 'bg-danger-muted text-danger',
          ].join(' ')}
        >
          {result.passed ? 'Aprobado' : 'No aprobado'}
        </span>
        <p className="mx-auto mt-4 max-w-md text-xs text-text-muted">
          Esta puntuación es orientativa y no reproduce exactamente el sistema de puntuación escalada de AWS.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Correctas" value={String(result.correct)} tone="success" />
        <StatCard label="Incorrectas" value={String(result.incorrect)} tone="danger" />
        <StatCard label="Sin responder" value={String(result.unanswered)} />
        <StatCard label="Tiempo empleado" value={formatDuration(result.timeSpentSeconds)} />
      </section>

      <section>
        <h2 className="text-sm font-semibold text-text-primary">Resultado por dominio</h2>
        <div className="mt-4 space-y-4 rounded-2xl border border-surface-2 bg-surface-1 p-5">
          {result.domainResults.map((d) => (
            <BarRow
              key={d.domain}
              label={meta.domains.find((dom) => dom.id === d.domain)?.name ?? d.domain}
              correct={d.correct}
              total={d.total}
              percentage={d.percentage}
            />
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link to={`/exam/review/${result.id}`}>
          <Button size="lg" className="w-full sm:w-auto">
            Revisar examen
          </Button>
        </Link>
        <Link to="/exam">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            Nuevo simulacro
          </Button>
        </Link>
      </div>
    </div>
  )
}
