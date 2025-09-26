import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-sa-cloud">
        <Container>
        <div className="max-w-4xl mx-auto py-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-sa-ink mb-8">
              Política de Privacidad
            </h1>
            
            <div className="prose prose-lg max-w-none text-sa-ink/80">
              <p className="text-sm text-sa-ink/60 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">1. Información General</h2>
                <p>
                  Sueño Andino, con domicilio en Lima, Perú, es responsable del tratamiento de los datos personales 
                  que nos proporciones a través de nuestro sitio web y servicios.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">2. Datos que Recopilamos</h2>
                <p>Recopilamos los siguientes tipos de información:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Información de contacto (nombre, email, teléfono)</li>
                  <li>Información de navegación (cookies, IP, dispositivo)</li>
                  <li>Información de comunicaciones (mensajes, consultas)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">3. Uso de la Información</h2>
                <p>Utilizamos tus datos para:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Enviar información sobre nuestros servicios</li>
                  <li>Mejorar nuestros servicios y sitio web</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">4. Compartir Información</h2>
                <p>
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, 
                  excepto cuando sea necesario para cumplir con la ley o con tu consentimiento explícito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">5. Tus Derechos</h2>
                <p>Tienes derecho a:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Acceder a tus datos personales</li>
                  <li>Rectificar información inexacta</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al tratamiento de tus datos</li>
                  <li>Portabilidad de datos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">6. Seguridad</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                  tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">7. Contacto</h2>
                <p>
                  Para ejercer tus derechos o realizar consultas sobre esta política, puedes contactarnos en:
                </p>
                <div className="mt-4 p-4 bg-sa-cloud rounded-lg">
                  <p><strong>Email:</strong> privacidad@sueñoandino.com</p>
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
