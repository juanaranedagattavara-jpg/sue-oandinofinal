import Container from './Container'
import homeData from '../content/home.json'

export default function Stats() {
  return (
    <section className="bg-sa-primary text-white section-padding">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Impacto en Números
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Resultados concretos que transforman vidas y territorios
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeData.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-sa-accent">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
