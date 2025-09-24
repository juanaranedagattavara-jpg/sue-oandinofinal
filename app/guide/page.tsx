import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-sa-cloud">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sa-primary hover:text-sa-primary/80 transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-sa-ink mb-6">
            Guía de Desarrollo Territorial Regenerativo
          </h1>
          
          <p className="text-xl text-sa-ink/80 mb-12">
            Descarga nuestra guía completa con metodologías, casos de éxito y herramientas prácticas para implementar proyectos regenerativos en tu territorio.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-sa-ink mb-4">
              ¿Qué incluye la guía?
            </h2>
            <ul className="text-left space-y-3 text-sa-ink/80">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sa-accent rounded-full mt-2 flex-shrink-0"></span>
                Metodologías participativas probadas en 25+ comunidades
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sa-accent rounded-full mt-2 flex-shrink-0"></span>
                Casos de éxito detallados con métricas reales
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sa-accent rounded-full mt-2 flex-shrink-0"></span>
                Herramientas de diagnóstico territorial
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sa-accent rounded-full mt-2 flex-shrink-0"></span>
                Plantillas para planificación y seguimiento
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sa-accent rounded-full mt-2 flex-shrink-0"></span>
                Contacto directo con nuestro equipo de expertos
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Descargar Guía Gratuita
            </button>
            <p className="text-sm text-sa-ink/60">
              Al descargar, aceptas recibir actualizaciones sobre nuestros proyectos
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
