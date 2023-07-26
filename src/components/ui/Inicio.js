import React from 'react'
import { CarouselImgs } from './CarouselImgs'
import grupo from '../../assets/Grupo Personas.png'
import abuso from '../../assets/Victima Abuso.png'
import maestra from '../../assets/maestro.png'
import hexagonYe from '../../assets/icons8-hexagon-480-yellow.png'
import hexagonRed from '../../assets/icons8-hexagon-480-red.png'
import hexagonBlue from '../../assets/icons8-hexagon-480-blue.png'
import inicial from '../../assets/Educacion Inicial.jpg'
import primaria from '../../assets/educacion primaria (1).jpg'

import media from '../../assets/Educacion Media.jpg'




export const Inicio = () => {
  
  return (
    <div>
       <CarouselImgs />
       
       <div id='container-ini'>
        <div className='title-prin'>

          <h1>SITUACIÓN DE LA VIOLENCIA EN EL CONTEXTO ESCOLAR</h1>
          <h3>En Cantidades</h3>
        </div>
        <div className='flex-cant'>
            <div className='item-cant yellow'>
              <div className='hexagon'>
                <img src={hexagonYe} alt='Hexa' />
                  <span className='hexagon-inner'>
                    <img src={grupo} alt='Grupo de personas'/>
                  </span>
              </div>
              <div className='item-content' >
                  <h4>2 millones</h4>
                  <p>Niñas, niños y adolescentes en edad escolar están fuera del sistema educativo.</p>
              </div>
            </div>
            <div className='item-cant blue'>
              <div className='hexagon'>
              <img src={hexagonBlue} alt='Hexa' />
                  <span className='hexagon-inner'>
                    <img src={maestra} alt='Maestra' />
                  </span>
              </div>
              <div className='item-content' >
                  <h4>3 DE CADA 10</h4>
                  <p>Se reportan como víctimas del acoso escolar.</p>
              </div>
            </div>
            <div className='item-cant red'>
              <div className='hexagon'>
              <img src={hexagonRed} alt='Hexa' />

                  <span className='hexagon-inner'>
                    <img src={abuso} alt='Abuso' />
                  </span>
              </div>
              <div className='item-content' >
                  <h4>147 MIL</h4>
                  <p>Docentes a cargo de la educación de niños y adolescentes.</p>
              </div>
            </div>
        </div>

        <div className='title-secun'>
          <h2>Eres un héroe cotidiano, formando el futuro con cada selección</h2>
          <h5>Contamos con capacitaciones para cada nivel de eduación</h5>
        </div>

        <div className='flex-level'>
          <div className='level-card yellow-level'>
            <div className='level-img'>
              <img src={inicial} alt='Nivel Inicial'/>
            </div>
            <div className='level-content' >
                <h6>EDUCACIÓN INICIAL</h6>
                <p>Actividades divertidas y constructivas para que los más pequeños del salón.</p>
            </div>
          </div>
          <div className='level-card blue-level'>
            <div className='level-img '>
              <img src={primaria} alt='Nivel Primaria'/>
            </div>
            <div className='level-content' >
                <h6>EDUCACIÓN PRIMARIA</h6>
                <p>Dinámicas para promover, fomentar y reforzar los valores dentro del aula.</p>
            </div>
          </div>
          <div className='level-card red-level'>
            <div className='level-img'>
              <img src={media} alt='Nivel Media'/>
            </div>
            <div className='level-content' >
                <h6>EDUCACIÓN MEDIA</h6>
                <p>Los jovenes podran explotar sus capacidades con una convivencia pacifica.</p>
            </div>
          </div>

        </div>

       </div>
      
    </div>
  )
}
