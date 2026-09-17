import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { ACTIVE_CERTIFICATION, CERTIFICATION_LIST, CERTIFICATION_REGISTRY, hasQuestions } from '@/data'
import { applyTranslations } from '@/utils/translateQuestions'
import type { CertificationMeta } from '@/types/certification'
import type { Question, QuestionLanguage } from '@/types/question'

const STORAGE_KEY = 'saa-settings'

function readStoredCertification(): string {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return ACTIVE_CERTIFICATION
    const parsed = JSON.parse(raw) as { certification?: string }
    if (parsed.certification && CERTIFICATION_REGISTRY[parsed.certification]) {
      return parsed.certification
    }
  } catch {
    // ignore malformed settings
  }
  return ACTIVE_CERTIFICATION
}

function readStoredLanguage(): QuestionLanguage {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return 'es'
    const parsed = JSON.parse(raw) as { language?: QuestionLanguage }
    if (parsed.language === 'en' || parsed.language === 'es') return parsed.language
  } catch {
    // ignore malformed settings
  }
  return 'es'
}

function persistSettings(certification: string, language: QuestionLanguage) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ certification, language }))
  } catch {
    // ignore storage failures (e.g. private browsing)
  }
}

interface CertificationContextValue {
  certificationId: string
  meta: CertificationMeta
  questions: Question[]
  hasQuestions: boolean
  certifications: { meta: CertificationMeta; questions: Question[] }[]
  setCertificationId: (id: string) => void
  language: QuestionLanguage
  setLanguage: (language: QuestionLanguage) => void
  languageAvailable: boolean
}

const CertificationContext = createContext<CertificationContextValue | null>(null)

export function CertificationProvider({ children }: { children: ReactNode }) {
  const [certificationId, setCertificationIdState] = useState<string>(() => readStoredCertification())
  const [language, setLanguageState] = useState<QuestionLanguage>(() => readStoredLanguage())

  const setCertificationId = useCallback(
    (id: string) => {
      if (!CERTIFICATION_REGISTRY[id]) return
      setCertificationIdState(id)
      persistSettings(id, language)
    },
    [language],
  )

  const setLanguage = useCallback(
    (nextLanguage: QuestionLanguage) => {
      setLanguageState(nextLanguage)
      persistSettings(certificationId, nextLanguage)
    },
    [certificationId],
  )

  const value = useMemo<CertificationContextValue>(() => {
    const entry = CERTIFICATION_REGISTRY[certificationId] ?? CERTIFICATION_REGISTRY[ACTIVE_CERTIFICATION]
    const translationMap = entry.translations?.[language]
    return {
      certificationId,
      meta: entry.meta,
      questions: applyTranslations(entry.questions, translationMap),
      hasQuestions: hasQuestions(certificationId),
      certifications: CERTIFICATION_LIST,
      setCertificationId,
      language,
      setLanguage,
      languageAvailable: Boolean(entry.translations?.en),
    }
  }, [certificationId, setCertificationId, language, setLanguage])

  return <CertificationContext.Provider value={value}>{children}</CertificationContext.Provider>
}

export function useCertification(): CertificationContextValue {
  const ctx = useContext(CertificationContext)
  if (!ctx) throw new Error('useCertification debe usarse dentro de CertificationProvider')
  return ctx
}
