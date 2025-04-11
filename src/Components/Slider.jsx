// import Carousel from "./Carousel.jsx"

import Carousel1 from './assets/car1.jpg'
import Carousel2 from './assets/car2.jpg'
import Carousel3 from './assets/car3.jpg'
import Carousel4 from './assets/car4.jpg'

function Slider(){
   const slides = { Carousel1, Carousel2, Carousel3, Carousel4,}

    return (
        <>
       <main className='Slider'>
        <div className='max-w-lg'>
            <Carousel>
                {slides.map((s)=> (
                    <img src={s}  />
                ))}
            </Carousel>
        </div>
       </main>
        </>
    )
}

export default Slider