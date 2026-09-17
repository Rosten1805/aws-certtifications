import { useState } from 'react'
import { validateQuestionsPayload, type ValidationIssue } from '@/utils/schema'
import type { Question } from '@/types/question'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

export default function DevQuestionsPage() {
  const [raw, setRaw] = useState('')
  const [valid, setValid] = useState<Question[]>([])
  const [issues, setIssues] = useState<ValidationIssue[]>([])
  const [checked, setChecked] = useState(false)

  function handleValidate() {
    try {
      const payload = JSON.parse(raw)
      const result = validateQuestionsPayload(payload)
      setValid(result.valid)
      setIssues(result.issues)
      setChecked(true)
    } catch {
      setValid([])
      setIssues([{ index: -1, message: 'El texto pegado no es JSON válido.' }])
      setChecked(true)
    }
  }

  function handleDownload() {
    const blob = new Blob([JSON.stringify(valid, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'questions.normalized.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-text-primary">Importador de preguntas (dev)</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Herramienta de desarrollo para validar bancos de preguntas en formato JSON antes de incorporarlos a{' '}
          <code className="rounded bg-surface-2 px-1 py-0.5 text-xs">src/data/questions</code>. No modifica el código
          fuente automáticamente: descarga el JSON normalizado y añádelo tú mismo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <label htmlFor="json-input" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-text-muted">
            Pega el JSON del array de preguntas
          </label>
          <textarea
            id="json-input"
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            rows={20}
            className="focus-ring w-full rounded-xl border border-surface-3 bg-surface-2 p-4 font-mono text-xs text-text-primary"
            placeholder='[{ "id": 1, "certification": "AIF-C01", ... }]'
          />
          <div className="mt-3 flex gap-3">
            <Button onClick={handleValidate}>Validar</Button>
            {checked && valid.length > 0 && (
              <Button variant="secondary" onClick={handleDownload}>
                Descargar JSON normalizado
              </Button>
            )}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">Resultado</h2>
          {!checked && <p className="text-sm text-text-secondary">Pega un JSON y pulsa "Validar" para ver el resultado.</p>}

          {checked && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge tone={valid.length > 0 ? 'success' : 'neutral'}>{valid.length} válidas</Badge>
                <Badge tone={issues.length > 0 ? 'danger' : 'neutral'}>{issues.length} errores</Badge>
              </div>

              {issues.length > 0 && (
                <div className="max-h-64 overflow-y-auto rounded-xl border border-danger/30 bg-danger-muted p-4">
                  <ul className="space-y-1 text-xs text-danger">
                    {issues.map((issue, i) => (
                      <li key={i}>
                        {issue.index >= 0 ? `Pregunta índice ${issue.index}: ` : ''}
                        {issue.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {valid.length > 0 && (
                <div className="max-h-96 space-y-3 overflow-y-auto">
                  {valid.map((q) => (
                    <div key={q.id} className="rounded-xl border border-surface-2 bg-surface-1 p-4">
                      <p className="text-xs text-text-muted">
                        #{q.id} · {q.domain} · {q.difficulty} · {q.type}
                      </p>
                      <p className="mt-1 text-sm text-text-primary">{q.question}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
