import type { CertificationMeta } from '@/types/certification'

export const AIF_C01_META: CertificationMeta = {
  id: 'AIF-C01',
  code: 'AIF-C01',
  name: 'AWS Certified AI Practitioner',
  shortName: 'AI Practitioner',
  totalQuestions: 65,
  durationMinutes: 90,
  passingScore: 700,
  domains: [
    { id: 'ai-ml-fundamentals', name: 'Fundamentals of AI and ML', weight: 20 },
    { id: 'generative-ai-fundamentals', name: 'Fundamentals of Generative AI', weight: 24 },
    { id: 'foundation-model-applications', name: 'Applications of Foundation Models', weight: 28 },
    { id: 'responsible-ai', name: 'Guidelines for Responsible AI', weight: 14 },
    { id: 'security-compliance-governance', name: 'Security, Compliance, and Governance for AI Solutions', weight: 14 },
  ],
}
