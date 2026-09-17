import type { CertificationDomain } from '@/types/certification'
import type { ExamResult } from '@/types/exam'
import type { CertificationProgress, DomainStat, OverallStats, ServiceStat, TopicStat } from '@/types/progress'
import type { Question } from '@/types/question'

function pct(correct: number, total: number): number {
  return total === 0 ? 0 : Math.round((correct / total) * 100)
}

export function computeStats(
  questions: Question[],
  progress: CertificationProgress,
  examResults: ExamResult[],
  domains: CertificationDomain[],
): OverallStats {
  const byId = new Map(questions.map((q) => [q.id, q]))
  const answeredEntries = Object.values(progress.answered)

  let totalCorrect = 0
  let totalIncorrect = 0

  const domainBuckets = new Map<string, { correct: number; total: number }>()
  const serviceBuckets = new Map<string, { correct: number; total: number }>()
  const topicBuckets = new Map<string, { domain: string; correct: number; total: number }>()

  for (const entry of answeredEntries) {
    const question = byId.get(entry.questionId)
    if (!question) continue

    if (entry.outcome === 'correct') totalCorrect += 1
    else totalIncorrect += 1

    const domainBucket = domainBuckets.get(question.domain) ?? { correct: 0, total: 0 }
    domainBucket.total += 1
    if (entry.outcome === 'correct') domainBucket.correct += 1
    domainBuckets.set(question.domain, domainBucket)

    const topicBucket = topicBuckets.get(question.topic) ?? { domain: question.domain, correct: 0, total: 0 }
    topicBucket.total += 1
    if (entry.outcome === 'correct') topicBucket.correct += 1
    topicBuckets.set(question.topic, topicBucket)

    for (const service of question.services) {
      const serviceBucket = serviceBuckets.get(service) ?? { correct: 0, total: 0 }
      serviceBucket.total += 1
      if (entry.outcome === 'correct') serviceBucket.correct += 1
      serviceBuckets.set(service, serviceBucket)
    }
  }

  const domainStats: DomainStat[] = domains.map((domain) => {
    const bucket = domainBuckets.get(domain.id) ?? { correct: 0, total: 0 }
    return {
      domain: domain.id,
      answered: bucket.total,
      correct: bucket.correct,
      percentage: pct(bucket.correct, bucket.total),
    }
  })

  const serviceStats: ServiceStat[] = Array.from(serviceBuckets.entries())
    .map(([service, bucket]) => ({
      service,
      answered: bucket.total,
      correct: bucket.correct,
      percentage: pct(bucket.correct, bucket.total),
    }))
    .sort((a, b) => b.answered - a.answered)

  const topicStats: TopicStat[] = Array.from(topicBuckets.entries()).map(([topic, bucket]) => ({
    topic,
    domain: bucket.domain,
    answered: bucket.total,
    correct: bucket.correct,
    percentage: pct(bucket.correct, bucket.total),
  }))

  const weakTopics = [...topicStats]
    .filter((t) => t.answered >= 1)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 5)

  const averageScore =
    examResults.length === 0
      ? 0
      : Math.round(examResults.reduce((sum, r) => sum + r.percentage, 0) / examResults.length)

  const bestScore = examResults.length === 0 ? 0 : Math.max(...examResults.map((r) => r.percentage))

  return {
    totalAnswered: answeredEntries.length,
    totalCorrect,
    totalIncorrect,
    accuracy: pct(totalCorrect, answeredEntries.length),
    examsTaken: examResults.length,
    averageScore,
    bestScore,
    domainStats,
    serviceStats,
    topicStats,
    weakTopics,
  }
}
