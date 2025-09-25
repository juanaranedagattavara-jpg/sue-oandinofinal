import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-sa-cloud">
        <Container>
          <div className="max-w-4xl mx-auto py-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h1 className="text-3xl md:text-4xl font-bold text-sa-ink mb-8">
                Política de Cookies
              </h1>
              
              <div className="prose prose-lg max-w-none text-sa-ink/80">
                <p className="text-sm text-sa-ink/60 mb-8">
                  Última actualización: {new Date().toLocaleDateString('es-ES')}
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">1. ¿Qué son las Cookies?</h2>
                  <p>
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
                    visitas un sitio web. Nos ayudan a mejorar tu experiencia de navegación y a entender 
                    cómo utilizas nuestro sitio web.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">2. Tipos de Cookies que Utilizamos</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-sa-cloud rounded-lg">
                      <h3 className="text-lg font-semibold text-sa-ink mb-2">Cookies Estrictamente Necesarias</h3>
                      <p className="text-sm">
                        Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. 
                        Incluyen cookies de sesión, seguridad y funcionalidad básica.
                      </p>
                    </div>

                    <div className="p-4 bg-sa-cloud rounded-lg">
                      <h3 className="text-lg font-semibold text-sa-ink mb-2">Cookies de Rendimiento</h3>
                      <p className="text-sm">
                        Nos ayudan a entender cómo los visitantes interactúan con el sitio web, 
                        recopilando información de forma anónima.
                      </p>
                    </div>

                    <div className="p-4 bg-sa-cloud rounded-lg">
                      <h3 className="text-lg font-semibold text-sa-ink mb-2">Cookies de Funcionalidad</h3>
                      <p className="text-sm">
                        Permiten que el sitio web recuerde las elecciones que haces y proporcionen 
                        características mejoradas y más personales.
                      </p>
                    </div>

                    <div className="p-4 bg-sa-cloud rounded-lg">
                      <h3 className="text-lg font-semibold text-sa-ink mb-2">Cookies de Marketing</h3>
                      <p className="text-sm">
                        Se utilizan para hacer que los mensajes publicitarios sean más relevantes para ti. 
                        Pueden limitar el número de veces que ves un anuncio.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">3. Cookies Específicas que Utilizamos</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-sa-cloud">
                          <th className="border border-gray-300 p-3 text-left">Cookie</th>
                          <th className="border border-gray-300 p-3 text-left">Propósito</th>
                          <th className="border border-gray-300 p-3 text-left">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-mono text-sm">_next</td>
                          <td className="border border-gray-300 p-3">Funcionamiento del sitio web</td>
                          <td className="border border-gray-300 p-3">Sesión</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-mono text-sm">cookieConsent</td>
                          <td className="border border-gray-300 p-3">Recordar preferencias de cookies</td>
                          <td className="border border-gray-300 p-3">1 año</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-mono text-sm">_ga</td>
                          <td className="border border-gray-300 p-3">Análisis de tráfico web</td>
                          <td className="border border-gray-300 p-3">2 años</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">4. Gestión de Cookies</h2>
                  <p>
                    Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies 
                    que ya están en tu dispositivo y configurar la mayoría de navegadores para que no las acepten.
                  </p>
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-sa-ink mb-2">Configuración por Navegador:</h4>
                    <ul className="list-disc pl-6 text-sm">
                      <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
                      <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies</li>
                      <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</li>
                      <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos de sitio</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">5. Cookies de Terceros</h2>
                  <p>
                    Nuestro sitio web puede contener cookies de terceros para servicios como análisis web, 
                    redes sociales o publicidad. Estas cookies están sujetas a las políticas de privacidad 
                    de los respectivos terceros.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">6. Actualizaciones de esta Política</h2>
                  <p>
                    Podemos actualizar esta política de cookies ocasionalmente. Te recomendamos revisar 
                    esta página periódicamente para estar informado de cualquier cambio.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">7. Contacto</h2>
                  <p>
                    Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:
                  </p>
                  <div className="mt-4 p-4 bg-sa-cloud rounded-lg">
                    <p><strong>Email:</strong> cookies@sueñoandino.com</p>
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
