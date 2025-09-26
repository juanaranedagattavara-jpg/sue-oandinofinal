'use client';

import Container from './Container';
import Button from './Button';
import GuideModal from './GuideModal';
import useGuideModal from '../hooks/useGuideModal';

export default function Hero() {
  const { isOpen, openModal, closeModal } = useGuideModal();

  // Datos estáticos para evitar problemas de hidratación
  const heroData = {
    title: 'DESARROLLO TERRITORIAL REGENERATIVO DESDE Y HACIA LATINOAMÉRICA',
    desc: 'Impulsamos proyectos de desarrollo territorial que devuelven vitalidad a los ecosistemas, fortalecen comunidades y generan prosperidad consciente y regenerativa.',
    ctaPrimary: 'Conoce Nuestros Servicios',
    ctaSecondary: 'Descarga Guía Gratuita',
    stats: [
      { value: '1,200+', label: 'Personas Beneficiadas' },
      { value: '25+', label: 'Comunidades Atendidas' },
      { value: '15+', label: 'Proyectos Exitosos' },
      { value: '98%', label: 'Satisfacción' },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-sa-cloud to-white h-screen sm:h-auto sm:section-padding no-scroll-x">
      <Container>
        <div className="max-w-6xl mx-auto text-center flex flex-col justify-center h-full sm:h-auto py-8 sm:py-0 no-scroll-x">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-sa-ink mb-3 sm:mb-6 leading-tight break-words px-4">
            {heroData.title}
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-sa-ink/80 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            {heroData.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-16 px-4">
            <a href="#servicios" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                {heroData.ctaPrimary}
              </Button>
            </a>
            <Button
              variant="secondary"
              size="md"
              onClick={openModal}
              className="w-full sm:w-auto"
            >
              {heroData.ctaSecondary}
            </Button>
          </div>

          {/* Stats Grid - Horizontal en mobile */}
          <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 max-w-full mx-auto px-4 no-scroll-x">
            {heroData.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center min-w-[50px] sm:min-w-[80px] md:min-w-[100px] flex-shrink-0 max-w-[80px] sm:max-w-[120px] md:max-w-[150px]"
              >
                <div className="text-xs sm:text-lg md:text-2xl lg:text-3xl font-bold text-sa-primary mb-1 truncate">
                  {stat.value}
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-xs text-sa-ink/70 font-medium leading-tight line-clamp-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <GuideModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}
