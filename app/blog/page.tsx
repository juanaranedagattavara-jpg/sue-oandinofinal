import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-sa-cloud section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sa-ink mb-6">
              Blog
            </h1>
            <p className="text-xl text-sa-ink/80 mb-8">
              Próximamente: Artículos sobre desarrollo territorial regenerativo
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <p className="text-sa-ink/70">
                Estamos preparando contenido valioso sobre nuestras experiencias, 
                metodologías y casos de éxito en el desarrollo territorial regenerativo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
