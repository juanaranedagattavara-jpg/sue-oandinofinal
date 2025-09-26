import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-sa-cloud">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-sa-ink mb-8">Blog</h1>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-sa-ink/80">Próximamente: artículos sobre desarrollo territorial regenerativo, casos de éxito y metodologías innovadoras.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}