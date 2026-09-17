import type { ExamAnswerState } from '@/types/exam'

interface QuestionNavigatorGridProps {
  questionIds: number[]
  answers: Record<number, ExamAnswerState>
  currentIndex: number
  onNavigate: (index: number) => void
}

export default function QuestionNavigatorGrid({
  questionIds,
  answers,
  currentIndex,
  onNavigate,
}: QuestionNavigatorGridProps) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2">
        {questionIds.map((id, index) => {
          const answer = answers[id]
          const isCurrent = index === currentIndex
          const isAnswered = (answer?.selected.length ?? 0) > 0
          const isMarked = answer?.markedForReview

          let classes = 'border-surface-3 bg-surface-2 text-text-secondary hover:border-brand-blue/50'
          if (isCurrent) {
            classes = 'border-brand-blue bg-brand-blue text-white'
          } else if (isMarked) {
            classes = 'border-warning/60 bg-warning-muted text-warning'
          } else if (isAnswered) {
            classes = 'border-surface-3 bg-surface-3 text-text-primary'
          }

          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(index)}
              className={['focus-ring h-10 rounded-lg border text-sm font-semibold transition-colors', classes].join(
                ' ',
              )}
              aria-label={`Ir a la pregunta ${index + 1}`}
              aria-current={isCurrent}
            >
              {index + 1}
            </button>
          )
        })}
      </div>

      <div className="mt-5 space-y-2 text-xs text-text-secondary">
        <LegendItem colorClass="bg-brand-blue" label="Actual" />
        <LegendItem colorClass="bg-surface-3" label="Respondida" />
        <LegendItem colorClass="bg-surface-2 border border-surface-3" label="Sin responder" />
        <LegendItem colorClass="bg-warning" label="Marcada para revisar" />
      </div>
    </div>
  )
}

function LegendItem({ colorClass, label }: { colorClass: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={['h-3 w-3 rounded', colorClass].join(' ')} />
      {label}
    </div>
  )
}
