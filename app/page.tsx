import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlatformFlow from './components/PlatformFlow'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <PlatformFlow />
      <Features />
      <HowItWorks />
      <Metrics />
      <CTA />
      <Footer />
    </main>
  )
}
