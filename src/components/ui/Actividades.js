import React from "react";
import inicial from "../../assets/Educacion Inicial.jpg";
import primaria from "../../assets/educacion primaria (1).jpg";
import { Link } from "react-router-dom";

import media from "../../assets/Educacion Media.jpg";

export const Actividades = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-img">
          <img src="/assets/act-banner.png" alt="Somos Miel" />
        </div>
      </div>
      <div className="banner-info">
        <span>
          <h1>ACTIVIDADES</h1>
          <p>
            Somos un grupo de estudiantes con la meta de capacitar a los
            docentes para que sepan cómo actuar y responder ante la violencia
            escolar
          </p>
        </span>
      </div>

      <div className="container-somos">
        <div className="mision-prin">
          <h2 className="somos-title act">CAPACITACIÓN DE DOCENTES</h2>
          <p className="somos-para">POR MEDIO DE ACTIVIDADES INTERACTIVAS</p>
        </div>

        <div className="mvvp-container">
          <ol className="list-mvvp">
            <li>
              Ingresa a la sección “Actividades” y selecciona el nivel educativo
              al cual te dedicas.
            </li>
            <li>
              Practica con las lecciones que te presentamos para reforzar los
              valores dentro de tu salón.
            </li>
            <li>
              Para ver las actividades, tendrás un apartado llamado “Video” aquí
              podrás ver un video con un ejemplo de violencia en el cual te
              daremos 3 opciones a como actuarias como docente y cuál es la
              acción que deberías realizar y el por qué. Y otro que dirá
              “Actividad” donde podrás realizarla junto con tus alumnos para
              concientizar sobre la violencia en el ámbito escolar.
            </li>
            <li>
              Al responder la pregunta con respecto al video de la actividad
              donde se te indicará cuál es la opción correcta.
            </li>
          </ol>
        </div>

        <div className="flex-level">
          <div className="level-card ">
            <div className="level-img">
              <img src={inicial} alt="Nivel Inicial" />
            </div>
            <div className="level-content">
              <h6>EJERCICIOS DE EDUCACIÓN INICIAL</h6>
              <div className="button-act button-yellow">
                <Link
                  to="/ejercicios/inicial/actividad1/video#nav"
                  className="button-text"
                >
                  Comenzar
                </Link>{" "}
              </div>
            </div>
          </div>
          <div className="level-card">
            <div className="level-img">
              <img src={primaria} alt="Nivel Primaria" />
            </div>
            <div className="level-content">
              <h6>EJERCICIOS DE EDUCACIÓN PRIMARIA</h6>
              <div className="button-act button-blue">
                <Link
                  to="/ejercicios/primaria/actividad1/video"
                  className="button-text"
                >
                  Comenzar
                </Link>{" "}
              </div>
            </div>
          </div>
          <div className="level-card">
            <div className="level-img">
              <img src={media} alt="Nivel Media" />
            </div>
            <div className="level-content">
              <h6>EJERCICIOS DE EDUCACIÓN MEDIA</h6>
              <div className="button-act button-red">
                <Link
                  to="/ejercicios/media/actividad1/video"
                  className="button-text"
                >
                  Comenzar
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
