import Container from './Container';
import homeData from '../content/home.json';

export default function Cases() {
  return (
    <section id="casos-de-éxito" className="bg-white section-padding">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sa-ink mb-6">
              {homeData.cases.title}
            </h2>
            <p className="text-xl text-sa-ink/80 max-w-3xl mx-auto">
              Testimonios reales de comunidades que han transformado su
              territorio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData.cases.items.map((case_, index) => (
              <div
                key={index}
                className="bg-sa-cloud rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl font-bold text-sa-primary mb-4">
                  {case_.metric}
                </div>
                <blockquote className="text-lg text-sa-ink/80 mb-6 italic">
                  {case_.quote}
                </blockquote>
                <div className="text-sa-ink font-medium">— {case_.author}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
