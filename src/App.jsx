import Navbar from './components/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import slide0 from './assets/images/slide0.jpg'
import slide1 from './assets/images/slide1.jpg'
import slide2 from './assets/images/slide2.jpg'
import slide3 from './assets/images/slide3.jpg'

function App() {
  const slides=[
    slide0,
    slide1,
    slide2,
    slide3
  ]
  return (
    <div className="App scroll-smooth font-poppins bg-slate-900 overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <div className=" flex items-center flex-col">
        <h1 className='text-3xl text-white text-center p-4'>Our Recent Achievements</h1>
      <div className="max-w-xl">
        <Carousel autoslide={true} interval={1000}>
          {
            [
              ...slides.map((slide,i)=><img src={slide} key={i}/>)
            ]
          }
        </Carousel>
      </div>
      </div>
      <Services />
      <Cards />
      <About />
      
      <Footer />
    </div>
  )
}

export default App
