import React, { useState } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hamburger from "hamburger-react";
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <ul className="nav">
            <li><Link to={`/`} className='logo-img'> <img src={logo} alt="Logo EducaMiel" /> </Link></li>
            <li><Link to={`/quienes-somos`} className='link-style'> Quienes somos</Link></li>
            <li><Link to={`/nuestro-equipo`} className='link-style'>Nuestro Equipo</Link></li>
            <li><Link to={`/actividades`} className='link-style'>Actividades</Link></li>
            <li><Link to={`/ejercicios`} className='link-style'>Ejercicios</Link></li>

        </ul>

      <ul className="responsive-nav">
        <li>
          <Link to={`/`} className="logo-img">
            <img src={logo} alt="Logo EducaMiel" />{" "}
          </Link>
        </li>
        <li className="hamburger-button">
          <Hamburger
            
            toggled={isOpen}
            toggle={setOpen}
            color="white"
            size={40}
          />
        </li>
      </ul>

      {isOpen ? (
        <ul className="column-menu">
          <li>
            <Link to={`/quienes-somos`} className="link-style">
              {" "}
              Quienes somos
            </Link>
          </li>
          <li>
            <Link to={`/nuestro-equipo`} className="link-style">
              Nuestro Equipo
            </Link>
          </li>
          <li>
            <Link to={`/actividades`} className="link-style">
              Actividades
            </Link>
          </li>
          <li>
            <Link to={`/ejercicios`} className="link-style">
              Ejercicios
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
