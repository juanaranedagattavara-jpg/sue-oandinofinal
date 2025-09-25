import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function TerminosCondiciones() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-sa-cloud">
        <Container>
        <div className="max-w-4xl mx-auto py-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-sa-ink mb-8">
              Términos y Condiciones
            </h1>
            
            <div className="prose prose-lg max-w-none text-sa-ink/80">
              <p className="text-sm text-sa-ink/60 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar el sitio web de Sueño Andino, aceptas estar sujeto a estos 
                  términos y condiciones de uso. Si no estás de acuerdo con alguna parte de estos términos, 
                  no debes utilizar nuestro sitio web.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">2. Descripción del Servicio</h2>
                <p>
                  Sueño Andino es una organización dedicada al desarrollo territorial regenerativo. 
                  Nuestros servicios incluyen:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Educación regenerativa</li>
                  <li>Emprendimiento social</li>
                  <li>Consultoría territorial</li>
                  <li>Programas de desarrollo comunitario</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">3. Uso del Sitio Web</h2>
                <p>Al utilizar nuestro sitio web, te comprometes a:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>No utilizar el sitio para fines ilegales o no autorizados</li>
                  <li>No interferir con el funcionamiento del sitio</li>
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">4. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos, imágenes, 
                  y software, es propiedad de Sueño Andino y está protegido por las leyes de propiedad intelectual.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">5. Limitación de Responsabilidad</h2>
                <p>
                  Sueño Andino no será responsable por daños directos, indirectos, incidentales, 
                  especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestro sitio web.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">6. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">7. Ley Aplicable</h2>
                <p>
                  Estos términos se rigen por las leyes de la República del Perú. 
                  Cualquier disputa será resuelta por los tribunales competentes de Lima, Perú.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">8. Contacto</h2>
                <p>
                  Para consultas sobre estos términos y condiciones, puedes contactarnos en:
                </p>
                <div className="mt-4 p-4 bg-sa-cloud rounded-lg">
                  <p><strong>Email:</strong> legal@sueñoandino.com</p>
                  <p><strong>Teléfono:</strong> +51-999-888-777</p>
                  <p><strong>Dirección:</strong> Lima, Perú</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-sa-primary hover:text-sa-primary/80 font-medium"
                >
                  ← Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
