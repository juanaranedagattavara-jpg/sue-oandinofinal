'use client'

import Container from './Container'
import Button from './Button'
import GuideModal from './GuideModal'
import useGuideModal from '../hooks/useGuideModal'

export default function Hero() {
  const { isOpen, openModal, closeModal } = useGuideModal()
  
  const stats = [
    { value: "1,200+", label: "Personas Beneficiadas" },
    { value: "25+", label: "Comunidades Atendidas" },
    { value: "15+", label: "Proyectos Exitosos" },
    { value: "98%", label: "Satisfacción" }
  ]
  
  return (
    <section className="bg-gradient-to-br from-sa-cloud to-white section-padding">
      <Container>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sa-ink mb-6 leading-tight">
            DESARROLLO TERRITORIAL REGENERATIVO DESDE Y HACIA LATINOAMÉRICA
          </h1>
          
          <p className="text-xl md:text-2xl text-sa-ink/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Impulsamos proyectos de desarrollo territorial que devuelven vitalidad a los ecosistemas, fortalecen comunidades y generan prosperidad consciente y regenerativa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#servicios">
              <Button variant="primary" size="lg">Conoce Nuestros Servicios</Button>
            </a>
            <Button variant="secondary" size="lg" onClick={openModal}>Descarga Guía Gratuita</Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sa-primary mb-2">{stat.value}</div>
                <div className="text-sa-ink/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <GuideModal isOpen={isOpen} onClose={closeModal} />
    </section>
  )
}
