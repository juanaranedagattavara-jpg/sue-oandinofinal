import Container from './Container';
import homeData from '../content/home.json';

export default function About() {
  return (
    <section id="nosotros" className="bg-white section-padding">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sa-ink mb-6">
              {homeData.about.title}
            </h2>
            <p className="text-xl text-sa-ink/80 max-w-3xl mx-auto">
              {homeData.about.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeData.about.cards.map((card, index) => (
              <div
                key={index}
                className="bg-sa-cloud rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-sa-ink mb-4">
                  {card.title}
                </h3>
                <p className="text-sa-ink/80 text-lg">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
