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
      description: 'Nacimiento de Sueño Andino con la visión de transformar territorios a través del desarrollo regenerativo.',
      icon: '🌱'
    },
    {
      year: '2021',
      title: 'Primeros Proyectos',
      description: 'Implementación de los primeros programas de educación regenerativa en comunidades andinas.',
      icon: '🎓'
    },
    {
      year: '2022',
      title: 'Expansión Territorial',
      description: 'Ampliación a 15+ comunidades con programas de emprendimiento social y consultoría.',
      icon: '🗺️'
    },
    {
      year: '2023',
      title: 'Impacto Medible',
      description: 'Alcanzamos 1,200+ personas beneficiadas y 98% de satisfacción en nuestros programas.',
      icon: '📊'
    },
    {
      year: '2024',
      title: 'Futuro Regenerativo',
      description: 'Continuamos expandiendo nuestro impacto hacia un futuro más sostenible y equitativo.',
      icon: '🚀'
    }
  ]

  return (
    <section id="timeline" className="bg-sa-cloud section-padding">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sa-ink mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-sa-ink/80 max-w-3xl mx-auto">
              Un viaje de transformación que comenzó con una visión y hoy impacta miles de vidas
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sa-primary via-sa-accent to-sa-primary rounded-full"></div>

            {/* Items del timeline */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Contenido */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-2xl font-bold text-sa-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-sa-ink mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sa-ink/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Punto central */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-sa-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Espacio vacío para el lado opuesto */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-sa-ink mb-4">
                ¿Quieres ser parte de nuestra historia?
              </h3>
              <p className="text-sa-ink/80 mb-6">
                Únete a nosotros en la transformación de territorios y comunidades
              </p>
              <a
                href="#contacto"
                className="inline-block bg-sa-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-sa-primary/90 transition-colors duration-200"
              >
                Trabajemos Juntos
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
