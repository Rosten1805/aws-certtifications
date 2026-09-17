import type { CertificationMeta } from '@/types/certification'
import type { Question, QuestionLanguage, QuestionTranslationMap } from '@/types/question'
import { applyTranslations } from '@/utils/translateQuestions'
import { AIF_C01_META } from '@/data/certifications/aif-c01'
import { AIF_C01_QUESTIONS } from '@/data/questions/aif-c01.questions'
import { AIF_C01_TRANSLATIONS_EN } from '@/data/questions/aif-c01.questions.en'
import { SAA_C03_META } from '@/data/certifications/saa-c03'
import { SAA_C03_QUESTIONS } from '@/data/questions/saa-c03.questions'
import { SAA_C03_TRANSLATIONS_EN } from '@/data/questions/saa-c03.questions.en'

export interface CertificationRegistryEntry {
  meta: CertificationMeta
  questions: Question[]
  translations?: Partial<Record<QuestionLanguage, QuestionTranslationMap>>
}

export const CERTIFICATION_REGISTRY: Record<string, CertificationRegistryEntry> = {
  'AIF-C01': {
    meta: AIF_C01_META,
    questions: AIF_C01_QUESTIONS,
    translations: { en: AIF_C01_TRANSLATIONS_EN },
  },
  'SAA-C03': {
    meta: SAA_C03_META,
    questions: SAA_C03_QUESTIONS,
    translations: { en: SAA_C03_TRANSLATIONS_EN },
  },
}

export const CERTIFICATION_LIST: CertificationRegistryEntry[] = Object.values(CERTIFICATION_REGISTRY)

export const ACTIVE_CERTIFICATION = 'AIF-C01'

export const DEFAULT_CERTIFICATION_META = CERTIFICATION_REGISTRY[ACTIVE_CERTIFICATION].meta

export const DEFAULT_QUESTIONS = CERTIFICATION_REGISTRY[ACTIVE_CERTIFICATION].questions

export function getCertificationMeta(certification: string): CertificationMeta {
  const entry = CERTIFICATION_REGISTRY[certification]
  if (!entry) {
    throw new Error(`Certificación desconocida: ${certification}`)
  }
  return entry.meta
}

export function getQuestionsForCertification(certification: string): Question[] {
  const entry = CERTIFICATION_REGISTRY[certification]
  if (!entry) {
    throw new Error(`Certificación desconocida: ${certification}`)
  }
  return entry.questions
}

/**
 * Igual que `getQuestionsForCertification`, pero aplicando la traducción al idioma
 * indicado si existe (usado fuera de `CertificationContext`, p. ej. en la revisión
 * de un examen ya finalizado de una certificación que puede no ser la activa).
 */
export function getTranslatedQuestionsForCertification(
  certification: string,
  language: QuestionLanguage,
): Question[] {
  const entry = CERTIFICATION_REGISTRY[certification]
  if (!entry) {
    throw new Error(`Certificación desconocida: ${certification}`)
  }
  return applyTranslations(entry.questions, entry.translations?.[language])
}

export function hasQuestions(certification: string): boolean {
  return (CERTIFICATION_REGISTRY[certification]?.questions.length ?? 0) > 0
}
