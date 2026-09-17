import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-extrabold text-surface-3">404</p>
      <h1 className="mt-4 text-lg font-semibold text-text-primary">Página no encontrada</h1>
      <p className="mt-2 text-sm text-text-secondary">La página que buscas no existe o ha sido movida.</p>
      <Link to="/" className="mt-6">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  )
}
