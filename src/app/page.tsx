import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  )
}
