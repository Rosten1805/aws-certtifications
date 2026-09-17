import { Languages } from 'lucide-react'
import { useCertification } from '@/stores/CertificationContext'

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, setLanguage, languageAvailable } = useCertification()

  if (!languageAvailable) return null

  return (
    <div className={['flex items-center gap-2', className].join(' ')}>
      <Languages size={15} strokeWidth={1.75} className="text-text-muted" aria-hidden />
      <div className="inline-flex items-center rounded-full border border-surface-3 bg-surface-2 p-0.5 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setLanguage('es')}
          aria-pressed={language === 'es'}
          className={[
            'rounded-full px-3 py-1 transition-colors',
            language === 'es' ? 'bg-text-primary text-surface-0' : 'text-text-secondary hover:text-text-primary',
          ].join(' ')}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={[
            'rounded-full px-3 py-1 transition-colors',
            language === 'en' ? 'bg-text-primary text-surface-0' : 'text-text-secondary hover:text-text-primary',
          ].join(' ')}
        >
          EN
        </button>
      </div>
    </div>
  )
}
