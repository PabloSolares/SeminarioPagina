import React from 'react'
import { Carousel } from 'react-responsive-carousel'




export const CarouselImgs = () => {
  return (
    <Carousel className='carousel-cont' infiniteLoop={true} autoPlay={true} interval={1500} showThumbs={false} autoFocus={false} >
        <div>
            <img src='/assets/carousel1.jpg' alt='' />
        </div>
        <div>
            <img src='/assets/Carousel2.jpeg' alt='Futuro' />
        </div>
        <div>
            <img src='/assets/carousel3.jpeg' alt='Integral' />
        </div>
        <div>
            <img src='/assets/carousel4.jpeg' alt='Jovenes' />
        </div>
        <div>
            <img src='/assets/carousel5.jpeg' alt='Jovenes' />
        </div>
    </Carousel>
  )
}
