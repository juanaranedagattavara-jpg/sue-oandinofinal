import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'

// Datos simplificados para el blog
const blogPosts = [
  {
    id: 1,
    title: "Desarrollo Territorial Regenerativo: Una Nueva Perspectiva",
    excerpt: "Exploramos cómo el desarrollo territorial regenerativo está transformando comunidades en Latinoamérica.",
    date: "15 Dic 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Casos de Éxito: Huancavelica y el Renacimiento Comunitario",
    excerpt: "Un análisis del proyecto en Huancavelica que benefició a más de 300 familias.",
    date: "8 Dic 2024",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "La Importancia de la Participación Comunitaria",
    excerpt: "Por qué la participación activa de las comunidades es fundamental para el éxito.",
    date: "1 Dic 2024",
    readTime: "4 min"
  },
  {
    id: 4,
    title: "Sostenibilidad Ambiental en Proyectos Territoriales",
    excerpt: "Cómo integrar prácticas sostenibles en el desarrollo territorial.",
    date: "24 Nov 2024",
    readTime: "6 min"
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-sa-cloud">
      <Header />
      
      {/* Hero Section - Minimalista */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sa-ink mb-6">
              Blog
            </h1>
            <p className="text-xl text-sa-ink/70 max-w-2xl mx-auto">
              Ideas y experiencias sobre desarrollo territorial regenerativo
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts - Lista Simple */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-sa-ink/60">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-sa-ink mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-sa-ink/80 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sa-primary hover:text-sa-accent font-medium transition-colors"
                  >
                    Leer artículo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter - Minimalista */}
      <section className="py-16 bg-sa-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Mantente actualizado
            </h2>
            <p className="text-white/90 mb-8">
              Recibe nuestros últimos artículos sobre desarrollo territorial regenerativo
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg text-sa-ink placeholder-sa-ink/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-sa-primary px-6 py-3 rounded-lg font-medium hover:bg-sa-cloud transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
