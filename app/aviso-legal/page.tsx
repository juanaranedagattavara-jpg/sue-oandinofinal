import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function AvisoLegal() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-sa-cloud">
        <Container>
        <div className="max-w-4xl mx-auto py-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-sa-ink mb-8">
              Aviso Legal
            </h1>
            
            <div className="prose prose-lg max-w-none text-sa-ink/80">
              <p className="text-sm text-sa-ink/60 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">1. Datos de la Empresa</h2>
                <div className="p-4 bg-sa-cloud rounded-lg">
                  <p><strong>Denominación social:</strong> Sueño Andino</p>
                  <p><strong>Actividad:</strong> Desarrollo Territorial Regenerativo</p>
                  <p><strong>Domicilio:</strong> Lima, Perú</p>
                  <p><strong>Email:</strong> info@sueñoandino.com</p>
                  <p><strong>Teléfono:</strong> +51-999-888-777</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">2. Objeto del Sitio Web</h2>
                <p>
                  El presente sitio web tiene como finalidad proporcionar información sobre los servicios 
                  de Sueño Andino en el ámbito del desarrollo territorial regenerativo, así como facilitar 
                  el contacto con nuestra organización.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">3. Condiciones de Acceso</h2>
                <p>
                  El acceso al sitio web es gratuito y no requiere registro previo. Sin embargo, 
                  algunos servicios pueden requerir la cumplimentación de formularios de contacto.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">4. Uso del Sitio Web</h2>
                <p>El usuario se compromete a:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Hacer un uso adecuado del sitio web</li>
                  <li>No utilizar el sitio para actividades contrarias a la ley</li>
                  <li>No dañar, inutilizar o sobrecargar el sitio web</li>
                  <li>No introducir virus o elementos dañinos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">5. Propiedad Intelectual</h2>
                <p>
                  Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, 
                  tecnología, software, links y demás contenidos audiovisuales o sonoros) son propiedad 
                  de Sueño Andino o de terceros que han autorizado su uso.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">6. Exclusión de Garantías</h2>
                <p>
                  Sueño Andino no garantiza la disponibilidad y continuidad del funcionamiento del sitio web, 
                  ni la ausencia de errores en el mismo, ni la corrección de defectos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">7. Enlaces Externos</h2>
                <p>
                  El sitio web puede contener enlaces a otros sitios web. Sueño Andino no se hace responsable 
                  del contenido de dichos sitios web ni de las políticas de privacidad que puedan aplicar.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">8. Modificaciones</h2>
                <p>
                  Sueño Andino se reserva el derecho de realizar modificaciones en el sitio web sin previo aviso, 
                  pudiendo cambiar, suprimir o añadir tanto los contenidos como la forma de presentación.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-sa-ink mb-4">9. Legislación Aplicable</h2>
                <p>
                  El presente aviso legal se rige por la legislación peruana. Para cualquier controversia, 
                  las partes se someterán a los Juzgados y Tribunales de Lima.
                </p>
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
