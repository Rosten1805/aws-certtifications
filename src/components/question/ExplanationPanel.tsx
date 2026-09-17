import { ExternalLink } from 'lucide-react'
import type { Question } from '@/types/question'
import ServiceTag from '@/components/question/ServiceTag'

export default function ExplanationPanel({ question }: { question: Question }) {
  return (
    <div className="mt-6 space-y-5 rounded-xl border border-surface-2 bg-surface-1 p-5">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Explicación</h3>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-primary">{question.explanation}</p>
      </div>

      {question.diagramUrls && question.diagramUrls.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-text-muted">Diagrama</h3>
          <div className="mt-2 space-y-3">
            {question.diagramUrls.map((url) => (
              <a key={url} href={url} target="_blank" rel="noreferrer" className="focus-ring block overflow-hidden rounded-lg border border-surface-2">
                <img src={url} alt="Diagrama de la explicación" loading="lazy" className="w-full" />
              </a>
            ))}
          </div>
        </div>
      )}

      {question.keyConcept && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-orange">Concepto clave</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{question.keyConcept}</p>
        </div>
      )}

      {question.services.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-text-muted">Servicios relacionados</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {question.services.map((service) => (
              <ServiceTag key={service} service={service} />
            ))}
          </div>
        </div>
      )}

      {question.documentation && question.documentation.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-text-muted">Documentación recomendada</h3>
          <ul className="mt-2 space-y-1">
            {question.documentation.map((doc) => (
              <li key={doc.url}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-1 rounded text-sm text-brand-blue hover:underline"
                >
                  {doc.title}
                  <ExternalLink size={13} strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
