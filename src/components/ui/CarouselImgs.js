import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import ebron from '../../assets/ebroxd.jpg';
import futuro from '../../assets/futuro.png';
import integral from '../../assets/integral.png';
import jovenes from '../../assets/cap-est.png';


export const CarouselImgs = () => {
  return (
    <Carousel className='carousel-cont' infiniteLoop={true} autoPlay={true} interval={1500} showThumbs={false} autoFocus={false} >
        <div>
            <img src={ebron} alt='' />
        </div>
        <div>
            <img src={futuro} alt='Futuro' />
        </div>
        <div>
            <img src={integral} alt='Integral' />
        </div>
        <div>
            <img src={jovenes} alt='Jovenes' />
        </div>
    </Carousel>
  )
}
