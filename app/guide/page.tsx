import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Guide() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-sa-cloud">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-sa-ink mb-8">Guía Gratuita</h1>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-sa-ink/80 mb-6">Descarga nuestra guía completa de desarrollo territorial regenerativo.</p>
              <button className="bg-sa-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-sa-primary/90 transition-colors">
                Descargar Guía
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}