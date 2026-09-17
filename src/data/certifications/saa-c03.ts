import type { CertificationMeta } from '@/types/certification'

export const SAA_C03_META: CertificationMeta = {
  id: 'SAA-C03',
  code: 'SAA-C03',
  name: 'AWS Certified Solutions Architect – Associate',
  shortName: 'Solutions Architect Associate',
  totalQuestions: 65,
  durationMinutes: 130,
  passingScore: 720,
  domains: [
    { id: 'design-secure-architectures', name: 'Design Secure Architectures', weight: 30 },
    { id: 'design-resilient-architectures', name: 'Design Resilient Architectures', weight: 26 },
    { id: 'design-high-performing-architectures', name: 'Design High-Performing Architectures', weight: 24 },
    { id: 'design-cost-optimized-architectures', name: 'Design Cost-Optimized Architectures', weight: 20 },
  ],
}
