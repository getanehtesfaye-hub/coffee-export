import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CoffeeProducts from './components/CoffeeProducts'
import Origins from './components/Origins'
import Process from './components/Process'
import GlobalReach from './components/GlobalReach'
import ExportServices from './components/ExportServices'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <CoffeeProducts />
      <Origins />
      <Process />
      <GlobalReach />
      <ExportServices />
      <Contact />
      <Footer />
    </div>
  )
}
