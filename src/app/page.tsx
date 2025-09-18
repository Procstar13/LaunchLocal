import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Pricing />
      <Contact />
    </div>
  )
}
