import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sa-cloud">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sa-primary mb-4">404</h1>
        <p className="text-xl text-sa-ink/80 mb-8">Página no encontrada</p>
        <Link href="/" className="bg-sa-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-sa-primary/90 transition-colors">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}