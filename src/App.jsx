import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar  from './Components/Navbar'
import Hero from './Components/Hero.jsx'
import Slider from './Components/Slider.jsx'

import Carousel1 from './assets/car1.jpg'
import Carousel2 from './assets/car2.jpg'
import Carousel3 from './assets/car3.jpg'
import Carousel4 from './assets/car4.jpg'
import NavbarOne from './Components/NavbarOne.jsx'

const slides = [Carousel1,Carousel2,Carousel3,Carousel4,];


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div className='overflow-x-hidden'>
    <NavbarOne />
      <Navbar />
      </div> 
      {/* <Hero />        */}
      <Slider />
                {/* <div className='max-w-lg'>
                    <Carousel>
                        {slides.map((s) => (
                            <img src={s} />
                        ))}
                    </Carousel>
                </div> */}
    </>
  )
}

export default App
