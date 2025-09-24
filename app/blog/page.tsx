import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Button from '../../components/Button'

// Datos de ejemplo para el blog
const blogPosts = [
  {
    id: 1,
    title: "Desarrollo Territorial Regenerativo: Una Nueva Perspectiva",
    excerpt: "Exploramos cómo el desarrollo territorial regenerativo está transformando comunidades en Latinoamérica, combinando sabiduría ancestral con innovación moderna.",
    date: "15 de Diciembre, 2024",
    readTime: "5 min lectura",
    category: "Metodología",
    featured: true
  },
  {
    id: 2,
    title: "Casos de Éxito: Huancavelica y el Renacimiento Comunitario",
    excerpt: "Un análisis profundo del proyecto en Huancavelica que benefició a más de 300 familias y revitalizó el tejido social de la comunidad.",
    date: "8 de Diciembre, 2024",
    readTime: "7 min lectura",
    category: "Casos de Éxito",
    featured: false
  },
  {
    id: 3,
    title: "La Importancia de la Participación Comunitaria",
    excerpt: "Descubre por qué la participación activa de las comunidades es fundamental para el éxito de cualquier proyecto de desarrollo territorial.",
    date: "1 de Diciembre, 2024",
    readTime: "4 min lectura",
    category: "Comunidad",
    featured: false
  },
  {
    id: 4,
    title: "Sostenibilidad Ambiental en Proyectos Territoriales",
    excerpt: "Cómo integrar prácticas sostenibles en el desarrollo territorial sin comprometer el crecimiento económico de las comunidades.",
    date: "24 de Noviembre, 2024",
    readTime: "6 min lectura",
    category: "Sostenibilidad",
    featured: false
  }
]

const categories = ["Todos", "Metodología", "Casos de Éxito", "Comunidad", "Sostenibilidad"]

export default function Blog() {
  return (
    <main className="min-h-screen bg-sa-cloud">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sa-primary to-sa-accent text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Sueño Andino
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Ideas, experiencias y aprendizajes sobre desarrollo territorial regenerativo
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-sa-ink mb-8">Artículo Destacado</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-gradient-to-br from-sa-primary/10 to-sa-accent/10 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-sa-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sa-ink/60 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-sa-ink mb-4">
                      {post.title}
                    </h3>
                    <p className="text-sa-ink/80 text-lg mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sa-ink/60">{post.date}</span>
                      <Button variant="primary" size="lg">
                        Leer Artículo
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-gradient-to-br from-sa-primary to-sa-accent flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                      </div>
                      <p className="text-white/90">Imagen del artículo</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-sa-ink mb-8">Últimos Artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-sa-cloud rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-sa-primary/10 to-sa-accent/10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-sa-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-sa-ink/60 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-sa-ink mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sa-ink/80 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sa-ink/60 text-sm">{post.date}</span>
                      <Button variant="secondary" size="sm">
                        Leer
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-sa-primary to-sa-accent">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Mantente Actualizado
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Recibe nuestros últimos artículos y actualizaciones sobre desarrollo territorial regenerativo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg text-sa-ink placeholder-sa-ink/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg" className="bg-white text-sa-primary hover:bg-sa-cloud">
                Suscribirse
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
