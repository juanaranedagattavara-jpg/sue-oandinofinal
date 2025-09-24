import Link from 'next/link'
import Container from '../components/Container'

/**
 * Página 404 - Not Found
 * Se muestra cuando una ruta no existe
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-sa-cloud flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-sa-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-sa-ink mb-4">
            Página no encontrada
          </h2>
          <p className="text-sa-ink/80 mb-8 max-w-md mx-auto">
            La página que buscas no existe o ha sido movida.
          </p>
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Volver al inicio
          </Link>
        </div>
      </Container>
    </div>
  )
}
