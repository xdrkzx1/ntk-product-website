import Loader from './components/Loader'
import DemoModal from './components/DemoModal'
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
      <Loader />
      <DemoModal />
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="platform"><PlatformFlow /></div>
      <div id="solutions"><Features /></div>
      <div id="about"><HowItWorks /></div>
      <Metrics />
      <CTA />
      <Footer />
    </main>
  )
}
