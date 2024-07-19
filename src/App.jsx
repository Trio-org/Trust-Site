import Navbar from './components/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App scroll-smooth font-poppins bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Cards />
      <About />
      <Footer />
    </div>
  )
}

export default App
