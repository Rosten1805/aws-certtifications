import { useState, type ReactNode } from 'react'
import { Flag, Star } from 'lucide-react'
import type { Question } from '@/types/question'
import type { QuestionProgressEntry } from '@/types/progress'
import QuestionCard from '@/components/question/QuestionCard'

interface BankQuestionItemProps {
  question: Question
  domainName: string
  number: number
  answeredEntry?: QuestionProgressEntry
  isFavorite: boolean
  isMarked: boolean
  onCheck: (questionId: number, selected: string[]) => void
  onToggleFavorite: (questionId: number) => void
  onToggleMarked: (questionId: number) => void
}

function ActionButton({
  active,
  activeClass,
  label,
  onClick,
  children,
}: {
  active: boolean
  activeClass: string
  label: string
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={[
        'focus-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors',
        active ? activeClass : 'border-surface-3 bg-surface-2 text-text-secondary hover:text-text-primary',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export default function BankQuestionItem({
  question,
  domainName,
  number,
  answeredEntry,
  isFavorite,
  isMarked,
  onCheck,
  onToggleFavorite,
  onToggleMarked,
}: BankQuestionItemProps) {
  const [draft, setDraft] = useState<string[]>([])

  const revealed = Boolean(answeredEntry)
  const selected = revealed ? (answeredEntry?.lastSelected ?? []) : draft

  return (
    <QuestionCard
      question={question}
      domainName={domainName}
      number={number}
      selected={selected}
      onSelectionChange={setDraft}
      revealed={revealed}
      onCheck={() => onCheck(question.id, draft)}
      headerActions={
        <>
          <ActionButton
            active={isFavorite}
            activeClass="border-brand-orange/50 bg-brand-orange/10 text-brand-orange"
            label={isFavorite ? 'Quitar de guardadas' : 'Guardar pregunta'}
            onClick={() => onToggleFavorite(question.id)}
          >
            <Star size={15} strokeWidth={1.75} fill={isFavorite ? 'currentColor' : 'none'} />
          </ActionButton>
          <ActionButton
            active={isMarked}
            activeClass="border-warning/50 bg-warning-muted text-warning"
            label={isMarked ? 'Quitar marca' : 'Marcar para revisar'}
            onClick={() => onToggleMarked(question.id)}
          >
            <Flag size={15} strokeWidth={1.75} fill={isMarked ? 'currentColor' : 'none'} />
          </ActionButton>
        </>
      }
    />
  )
}
