import Container from './Container'
import homeData from '../content/home.json'

const serviceIcons = {
  'Educación Regenerativa': (
    <svg className="w-12 h-12 text-sa-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  'Emprendimiento Social': (
    <svg className="w-12 h-12 text-sa-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  'Consultoría Territorial': (
    <svg className="w-12 h-12 text-sa-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="bg-sa-cloud section-padding">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sa-ink mb-6">
              {homeData.services.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData.services.items.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {serviceIcons[service as keyof typeof serviceIcons]}
                </div>
                <h3 className="text-xl font-bold text-sa-ink mb-4">
                  {service}
                </h3>
                <p className="text-sa-ink/80">
                  Desarrollamos capacidades locales y fortalecemos el tejido social a través de metodologías participativas y regenerativas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
