export interface CertificationDomain {
  id: string
  name: string
  weight: number
}

export interface CertificationMeta {
  id: string
  code: string
  name: string
  shortName: string
  totalQuestions: number
  durationMinutes: number
  passingScore: number
  domains: CertificationDomain[]
}
