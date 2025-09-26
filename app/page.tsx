import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import About from '@/components/About';
import Services from '@/components/Services';
import Cases from '@/components/Cases';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Services />
      <Cases />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}