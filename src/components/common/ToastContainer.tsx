import { X } from 'lucide-react'
import { useToast } from '@/stores/ToastContext'

const VARIANT_CLASSES = {
  success: 'border-success/40 bg-success-muted text-success',
  error: 'border-danger/40 bg-danger-muted text-danger',
  info: 'border-brand-blue/40 bg-brand-blue/10 text-brand-blue',
}

export default function ToastContainer() {
  const { toasts, dismissToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4 sm:items-end sm:right-4 sm:left-auto">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          className={[
            'animate-toast-in pointer-events-auto flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium shadow-lg',
            VARIANT_CLASSES[toast.variant],
          ].join(' ')}
        >
          {toast.message}
          <button
            type="button"
            onClick={() => dismissToast(toast.id)}
            className="focus-ring rounded text-current/70 hover:text-current"
            aria-label="Cerrar notificación"
          >
            <X size={16} strokeWidth={1.75} />
          </button>
        </div>
      ))}
    </div>
  )
}
