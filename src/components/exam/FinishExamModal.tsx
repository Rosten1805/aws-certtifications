import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'

interface FinishExamModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  answered: number
  total: number
  marked: number
}

export default function FinishExamModal({ open, onClose, onConfirm, answered, total, marked }: FinishExamModalProps) {
  const unanswered = total - answered

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="¿Finalizar examen?"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Volver al examen
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Finalizar
          </Button>
        </>
      }
    >
      <div className="space-y-2">
        <p>
          Has respondido: <strong className="text-text-primary">{answered} / {total}</strong>
        </p>
        <p>
          Sin responder: <strong className="text-text-primary">{unanswered}</strong>
        </p>
        <p>
          Marcadas para revisar: <strong className="text-text-primary">{marked}</strong>
        </p>
      </div>
    </Modal>
  )
}
