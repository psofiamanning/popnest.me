import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-lg font-semibold text-neutral-900">Página no encontrada.</p>
      <Link to="/" className="mt-3 inline-block text-rose-600 underline">
        Volver al inicio
      </Link>
    </div>
  )
}
