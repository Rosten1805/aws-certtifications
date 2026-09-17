import Badge from '@/components/common/Badge'

export default function ServiceTag({ service }: { service: string }) {
  return <Badge tone="blue">{service}</Badge>
}
