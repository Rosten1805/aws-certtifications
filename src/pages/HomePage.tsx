import { BarChart3, BookOpen, Brain, Flag, Target, Timer } from 'lucide-react'
import { useCertification } from '@/stores/CertificationContext'
import DomainCard from '@/components/home/DomainCard'
import ModeCard from '@/components/home/ModeCard'
import CertificationCard from '@/components/home/CertificationCard'
import EmptyState from '@/components/common/EmptyState'

const ICON_PROPS = { size: 20, strokeWidth: 1.5 } as const

export default function HomePage() {
  const { meta, certificationId, hasQuestions, certifications, setCertificationId } = useCertification()

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-lg font-semibold text-text-primary">Certificaciones</h2>
        <p className="mt-1 text-sm text-text-secondary">Elige con qué certificación quieres practicar.</p>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map(({ meta: certMeta, questions }) => (
            <CertificationCard
              key={certMeta.id}
              meta={certMeta}
              active={certMeta.id === certificationId}
              available={questions.length > 0}
              onSelect={() => setCertificationId(certMeta.id)}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-surface-2 bg-surface-1 p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">{meta.code}</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">{meta.name}</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-secondary">
          Plataforma de práctica personal para preparar la certificación. Estudia por dominios, ponte a prueba con
          simulacros cronometrados y sigue tu progreso en el tiempo.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-surface-2 p-4">
            <p className="text-2xl font-bold text-text-primary">{meta.totalQuestions}</p>
            <p className="text-xs text-text-secondary">preguntas en el examen</p>
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
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-primary">Dominios del examen</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {meta.domains.map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index} />
          ))}
        </div>
      </section>

      {!hasQuestions ? (
        <EmptyState
          title="Banco de preguntas próximamente"
          description={`Todavía no hay preguntas cargadas para ${meta.name}. En cuanto se incorporen, esta certificación tendrá su propio banco de preguntas, simulacros y estadísticas.`}
        />
      ) : (
        <section>
          <h2 className="text-lg font-semibold text-text-primary">Elige cómo practicar</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ModeCard
              to="/bank"
              accent="blue"
              icon={<BookOpen {...ICON_PROPS} />}
              title="Banco de preguntas"
              description="Practica pregunta a pregunta y filtra por dominio, servicio AWS, dificultad y estado."
              ctaLabel="Practicar"
            />
            <ModeCard
              to="/exam"
              accent="orange"
              icon={<Timer {...ICON_PROPS} />}
              title="Simulacro de examen"
              description={`Realiza un examen de ${meta.totalQuestions} preguntas con temporizador y condiciones similares al examen real.`}
              ctaLabel="Iniciar simulacro"
            />
            <ModeCard
              to="/bank?status=incorrect"
              accent="blue"
              icon={<Target {...ICON_PROPS} />}
              title="Preguntas falladas"
              description="Repasa únicamente las preguntas que has contestado incorrectamente."
              ctaLabel="Repasar falladas"
            />
            <ModeCard
              to="/bank?status=marked"
              accent="blue"
              icon={<Flag {...ICON_PROPS} />}
              title="Preguntas marcadas"
              description="Revisa las preguntas que has guardado para estudiar después."
              ctaLabel="Ver marcadas"
            />
            <ModeCard
              to="/smart-review"
              accent="orange"
              icon={<Brain {...ICON_PROPS} />}
              title="Repaso inteligente"
              description="Sesiones rápidas que priorizan tus preguntas falladas, sin responder y tus puntos débiles."
              ctaLabel="Empezar repaso"
            />
            <ModeCard
              to="/stats"
              accent="blue"
              icon={<BarChart3 {...ICON_PROPS} />}
              title="Estadísticas"
              description="Consulta tu evolución general y tu rendimiento por dominio y por servicio."
              ctaLabel="Ver estadísticas"
            />
          </div>
        </section>
      )}
    </div>
  )
}
