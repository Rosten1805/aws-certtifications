import type { AnswerOption as AnswerOptionType } from '@/types/question'

interface AnswerOptionProps {
  option: AnswerOptionType
  inputType: 'radio' | 'checkbox'
  name: string
  selected: boolean
  isRevealed: boolean
  isCorrectOption: boolean
  onSelect: (id: string) => void
  disabled: boolean
}

export default function AnswerOption({
  option,
  inputType,
  name,
  selected,
  isRevealed,
  isCorrectOption,
  onSelect,
  disabled,
}: AnswerOptionProps) {
  let stateClasses = 'border-surface-3 bg-surface-2 hover:border-brand-blue/60'

  if (isRevealed) {
    if (isCorrectOption) {
      stateClasses = 'border-success bg-success-muted'
    } else if (selected && !isCorrectOption) {
      stateClasses = 'border-danger bg-danger-muted'
    } else {
      stateClasses = 'border-surface-3 bg-surface-2 opacity-70'
    }
  } else if (selected) {
    stateClasses = 'border-brand-blue bg-brand-blue/10'
  }

  return (
    <label
      className={[
        'focus-within:ring-2 focus-within:ring-brand-blue flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors',
        stateClasses,
        disabled ? 'cursor-default' : '',
      ].join(' ')}
    >
      <input
        type={inputType}
        name={name}
        checked={selected}
        disabled={disabled}
        onChange={() => onSelect(option.id)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-brand-blue)]"
        aria-label={`Opción ${option.id}: ${option.text}`}
      />
      <span className="flex-1 whitespace-pre-line text-sm leading-relaxed text-text-primary">
        <span className="mr-2 font-semibold text-text-secondary">{option.id}.</span>
        {option.text}
        {isRevealed && option.explanation && (
          <span className="mt-1.5 block text-xs text-text-secondary">{option.explanation}</span>
        )}
      </span>
      {isRevealed && isCorrectOption && (
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-success">Correcta</span>
      )}
      {isRevealed && selected && !isCorrectOption && (
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-danger">Tu respuesta</span>
      )}
    </label>
  )
}
