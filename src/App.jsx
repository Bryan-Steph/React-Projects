import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar  from './Components/Navbar'


import NavbarOne from './Components/NavbarOne.jsx'
import Carousel from './Components/Carousel.jsx'

import Carousel1 from './assets/car1.jpg'
import Carousel2 from './assets/car2.jpg'
import Carousel3 from './assets/car3.jpg'
import Carousel4 from './assets/car4.jpg'
import demoVideo from './assets/demo.mp4'



function App() {

  const slides = [Carousel1,Carousel2,Carousel3,Carousel4,];

  return (
    <>
    <div className='overflow-x-hidden'>
    <NavbarOne />
      <Navbar />
      </div> 
                <div className=' w-[400px]  flex justify-center  ml-10'>
                    <Carousel autoSlide={true} autoSlideInterval={3000}>
                        {[... slides.map((s) => (
                            <img src={s} />
                        )),
                        <video className='bg-black' autoSlideInterval={30000} src={demoVideo} autoPlay muted loop />
                        ]}
                    </Carousel>
                </div>
    </>
  )
}

export default App
