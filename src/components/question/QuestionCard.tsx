import type { ReactNode } from 'react'
import type { Question } from '@/types/question'
import AnswerOption from '@/components/question/AnswerOption'
import DifficultyBadge from '@/components/question/DifficultyBadge'
import ExplanationPanel from '@/components/question/ExplanationPanel'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'

interface QuestionCardProps {
  question: Question
  domainName: string
  number: number
  selected: string[]
  onSelectionChange: (selected: string[]) => void
  revealed: boolean
  onCheck?: () => void
  disabled?: boolean
  showExplanation?: boolean
  headerActions?: ReactNode
}

export default function QuestionCard({
  question,
  domainName,
  number,
  selected,
  onSelectionChange,
  revealed,
  onCheck,
  disabled = false,
  showExplanation = true,
  headerActions,
}: QuestionCardProps) {
  const isMultiple = question.type === 'multiple'
  const requiredCount = question.correctAnswers.length
  const correctSet = new Set(question.correctAnswers)
  const isLocked = revealed || disabled

  function handleSelect(id: string) {
    if (isLocked) return
    if (!isMultiple) {
      onSelectionChange([id])
      return
    }
    if (selected.includes(id)) {
      onSelectionChange(selected.filter((s) => s !== id))
    } else if (selected.length < requiredCount) {
      onSelectionChange([...selected, id])
    }
  }

  return (
    <div className="rounded-2xl border border-surface-2 bg-surface-1 p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Pregunta #{number}
          </span>
          <Badge tone="orange">{domainName}</Badge>
          {question.services.map((s) => (
            <Badge key={s} tone="blue">
              {s}
            </Badge>
          ))}
          <DifficultyBadge difficulty={question.difficulty} />
        </div>
        {headerActions && <div className="flex items-center gap-2">{headerActions}</div>}
      </div>

      <h2 className="mt-4 whitespace-pre-line text-base font-medium leading-relaxed text-text-primary sm:text-lg">
        {question.question}
      </h2>

      {isMultiple && (
        <p className="mt-2 text-xs font-medium text-brand-orange">
          Selecciona {requiredCount === 2 ? 'DOS' : requiredCount === 3 ? 'TRES' : requiredCount} respuestas
          {!revealed && ` (${selected.length}/${requiredCount})`}
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3">
        {question.answers.map((option) => (
          <AnswerOption
            key={option.id}
            option={option}
            inputType={isMultiple ? 'checkbox' : 'radio'}
            name={`question-${question.id}`}
            selected={selected.includes(option.id)}
            isRevealed={revealed}
            isCorrectOption={correctSet.has(option.id)}
            onSelect={handleSelect}
            disabled={isLocked}
          />
        ))}
      </div>

      {!revealed && onCheck && (
        <div className="mt-6">
          <Button onClick={onCheck} disabled={selected.length === 0}>
            Comprobar respuesta
          </Button>
        </div>
      )}

      {revealed && showExplanation && <ExplanationPanel question={question} />}
    </div>
  )
}
