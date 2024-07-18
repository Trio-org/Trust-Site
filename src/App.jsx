import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Services from './pages/Services'
import About from './pages/About'
import DonatePage from './pages/DonatePage'
import Carousel from './components/Carousel'

function App() {
  const slides=[
    "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
    "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
    "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
    "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg"
  ]
  return (
    <div >
      <div className="max-w-lg">
        <Carousel autoslide={true} interval={1000}>
          {
            [
              ...slides.map((slide,i)=><img src={slide} key={i}/>)
            ]
          }
        </Carousel>
        </div>
     {/* <Services/> */}
     {/* <About/> */}
     {/* <DonatePage /> */}
    </div>
  )
}

export default App
