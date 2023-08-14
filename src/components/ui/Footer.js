import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <div>
         <ul id="footer">
            <li> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.111489069316!2d-90.5864201897353!3d14.5356148786066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a76c9fb92753%3A0x1ebaafd4023a0e87!2sCentro%20Educativo%20Miel!5e0!3m2!1ses-419!2sgt!4v1688610883680!5m2!1ses-419!2sgt" width="200" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
            <li><Link to={`/quienes-somos`} className='link-style'> Quienes somos</Link></li>
            <li><Link to={`/nuestro-equipo`} className='link-style'>Nuestro Equipo</Link></li>
            <li><Link to={`/ejercicios`} className='link-style'>Ejercicios</Link></li>
            <li><button type="button" className='button-link' ><a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfInKkfYkGLgBCbS8ocsoTf79GFtw4LvPVD9n8g9BZ-opJxAg/viewform?usp=sf_link"  >Deja tu Opinión aquí!</a></button></li>
        </ul>
    </div>
  )
}
