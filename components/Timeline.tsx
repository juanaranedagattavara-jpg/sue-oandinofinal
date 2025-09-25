import Container from './Container'

/**
 * Componente Timeline con diseño elegante
 * Muestra la evolución y hitos del proyecto Sueño Andino
 */
export default function Timeline() {
  const timelineData = [
    {
      year: '2020',
      title: 'Fundación',
      description: 'Nacimiento con visión de transformar territorios.',
      icon: '🌱'
    },
    {
      year: '2021',
      title: 'Primeros Proyectos',
      description: 'Programas de educación regenerativa.',
      icon: '🎓'
    },
    {
      year: '2022',
      title: 'Expansión',
      description: '15+ comunidades atendidas.',
      icon: '🗺️'
    },
    {
      year: '2023',
      title: 'Impacto',
      description: '1,200+ personas beneficiadas.',
      icon: '📊'
    },
    {
      year: '2024',
      title: 'Futuro',
      description: 'Continuamos expandiendo nuestro impacto.',
      icon: '🚀'
    }
  ]

  return (
    <section id="timeline" className="bg-sa-cloud py-12 md:py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-sa-ink mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg text-sa-ink/80 max-w-2xl mx-auto">
              Un viaje de transformación que impacta miles de vidas
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sa-primary via-sa-accent to-sa-primary rounded-full"></div>

            {/* Items del timeline */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Contenido */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-lg font-bold text-sa-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-sa-ink mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-sa-ink/80">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Punto central */}
                  <div className="relative z-10 flex-shrink-0 w-6 h-6 bg-sa-primary rounded-full border-3 border-white shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Espacio vacío para el lado opuesto */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 max-w-sm mx-auto shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-sa-ink mb-4">
                Mantente al día
              </h3>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-sa-primary focus:border-sa-primary outline-none"
                />
                <button className="w-full bg-sa-primary text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-sa-primary/90 transition-colors duration-200">
                  Suscribirse a newsletter
                </button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
