import Link from 'next/link'
import Container from './Container'
import homeData from '../content/home.json'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-sa-cloud to-white section-padding">
      <Container>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sa-ink mb-6 leading-tight">
            {homeData.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-sa-ink/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {homeData.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#servicios"
              className="btn-primary text-lg px-8 py-4"
            >
              {homeData.hero.ctaPrimary}
            </a>
            <Link
              href="/guide"
              className="btn-secondary text-lg px-8 py-4"
            >
              {homeData.hero.ctaSecondary}
            </Link>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {homeData.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sa-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sa-ink/70 font-medium">
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
