import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShowVideo } from "./ShowVideo";
import { ShowInfoAct } from "./ShowInfoAct";
import { Footer } from "./Footer";

export const Ejercicios = () => {
  const [clickInicial, setClickInicial] = useState(true);
  const [clickPrimaria, setClickPrimaria] = useState(true);
  const [clickMedia, setClickMedia] = useState(true);

  let rowsInicial = [];
  let rowsPrimaria = [];
  let rowsMedia = [];

// `is-open animate__animated animate__slideInDown`
  const rowsArray = (array, nivel, value) => {
    for (let i = 1; i <= 10; i++) {
      array.push([
        <li
          key={i}
          className={
            !value
              ? `is-open animate__animated animate__slideInDown` 
              : `is-close animate__animated animate__slideInDown` 
          }
        >
          <img src="/assets/hoja-vector.png" alt="Hoja" />
          <Link className="span-act" to={`${nivel}/actividad${i}/video`}>
            Actividad {i}
          </Link>
        </li>,
      ]);
    }
  };

  const showRows = (array) => {
    return array.map((row) => {
      return row

    });
  };

  function separarTexto(texto) {
    const elementos = texto.split("/");
    elementos.shift();

    var resultado = {
      nivel: elementos[1] || "",
      numeroAct: elementos[2] || "",
      type: elementos[3] || "",
    };

    return resultado;
  }

  const toUpper = (name = '') => {
    return name.replace(/(\d+)/g, ' $1').replace(/\b([a-z])/g, c => c.toUpperCase());
  }

  const location = useLocation();

  const texto = location.pathname;
  const objeto = separarTexto(texto);

  rowsArray(rowsInicial, "inicial", clickInicial, clickPrimaria, clickMedia);
  rowsArray(rowsPrimaria, "primaria", clickPrimaria, clickInicial, clickMedia);
  rowsArray(rowsMedia, "media", clickMedia, clickInicial, clickPrimaria);

  return (
    <>
      <div className="activities-container">
        <div className="container-lateral">
          <div className="back-button">
            <Link to={'/actividades'} className="img-back-container ">
              <img src="/assets/icon_arrow left.png" alt="Back" />
            </Link>
            <span className="button-link-back" >Más Actividades</span>
          </div>

          <div className="column-media">
            <ul>
              <li className="header-column">
                <span>Educación Inicial</span>
                <div className="minus-container">
                  <img
                    onClick={() => {
                      setClickInicial(!clickInicial);
                      

                    }}
                    src={
                      clickInicial ? `/assets/plus.png` : `/assets/minus.png`
                    }
                    alt="minus"
                  />
                </div>
              </li>
              {showRows(rowsInicial)}
            </ul>
            <ul>
              <li className="header-column">
                <span>Educación Primaria</span>
                <div className="minus-container">
                  <img
                    onClick={() => {
                      setClickPrimaria(!clickPrimaria);
                      

                        
                    }}
                    src={
                      clickPrimaria ? `/assets/plus.png` : `/assets/minus.png`
                    }
                    alt="minus"
                  />
                </div>
              </li>
              {showRows(rowsPrimaria)}
            </ul>
            <ul className="media-bootom">
              <li className="header-column">
                <span>Educación Media</span>
                <div className="minus-container">
                  <img
                    onClick={() => {
                      setClickMedia(!clickMedia);
                    
                      
                    }}
                    src={clickMedia ? `/assets/plus.png` : `/assets/minus.png`}
                    alt="minus"
                  />
                </div>
              </li>
              {showRows(rowsMedia)}
            </ul>
          </div>
        </div>
        {location.pathname !== "/ejercicios" &&
        location.pathname !== "/ejercicios/" ? (
          <div className="rows-titles">
            <Link
              to={`${objeto.nivel}/${objeto.numeroAct}/video`}
              className="video-header-container"
            >
              <img src="/assets/video-icon.png" alt="Video Play" />
              <span>Video</span>
            </Link>
            <Link
              to={`${objeto.nivel}/${objeto.numeroAct}/actividad`}
              className="act-header-container"
            >
              <span>Actividad</span>
            </Link>

            {objeto.type === "video" ? (
              <ShowVideo nivel={objeto.nivel} numAct={objeto.numeroAct} />
              
            ) : (
              <div className="video-container">
                <ShowInfoAct nivel={objeto.nivel} numAct={objeto.numeroAct} />{" "}
                
              </div>
            )}
            <div className="actNum-title">
            <img src="/assets/hoja-vector.png" alt="Hoja" />
              <span>{toUpper(objeto.numeroAct) }</span>
            </div>

          </div>
          
        ) : <div className="choose-act"><h1>Elige una actividad </h1></div>}
        
      </div>
    </>
  );
};
