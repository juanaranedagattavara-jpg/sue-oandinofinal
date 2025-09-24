import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Timeline from '../components/Timeline'
import Team from '../components/Team'
import Cases from '../components/Cases'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Services />
      <Team />
      <Cases />
      <Contact />
      <Footer />
    </main>
  )
}
