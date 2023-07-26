import React from "react";
import { investStudents1, investStudents2, investStudents3, investStudents4, students, techStudents } from "../data/students";
import { Equipo } from "../components/ui/Equipo";

export const GetStudents = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-img">
          <img src="/assets/claseentera.png" alt="Nuestro equipo" />
        </div>
      </div>
      <div className="banner-info">
        <span>
          <h1>Nuestro equipo</h1>
          <p>
            En MielEduca contamos con el mejor grupo de estudiantes: jovenes
            motivados y comprometidos con la misión y visión de este proyecto.
          </p>
        </span>
      </div>

      <div className="container-team">
        <div className="selector">
          <h6>El Equipo</h6>
        </div>
        <div className="info-para">
          <div className="prin-info">
            <h2>EL EQUIPO MIELEDUCA</h2>
            <p>
              MIELEDUCA es la suma de muchos estudiantes que trabajarón para
              conseguir una educación libre de violencia. Una educación que
              garantice los derechos y seguridad para el bienestar de todos los
              estudiantes.
            </p>
          </div>
          <div className="secon-info">
            <h4>¿Cómo nos organizamos?</h4>
            <p>
              MIELEDUCA está compuesta por 4 equipos, de los cuales cada uno de
              ellos se organizo cada parte del proyecto para asi de manera
              conjunta, tener hecho realidad nuestro proyecto.
              <br />
              <br />
              Nuestro equipo esta formado por 21 estudiantes, jovenes con
              capacidades y habilidades únicas y diferentes las cuales nos
              ayudaron para crear MIELEDUCA.
            </p>
          </div>
        </div>
      </div>
      <div className="team-flex">
        <div className="title-prin">
          <h1 className="blue-title">Equipo de tecnologia</h1>
        </div>
        {techStudents.map((student) => {
          return <Equipo key={student.id} {...student} />;
        })}
        <div className="title-prin">
          <h1 className="green-title">Equipo de Investigación1</h1>
        </div>
        {investStudents1.map((student) => {
          return <Equipo key={student.id} {...student} />;
        })}
        <div className="title-prin">
          <h1 className="red-title">Equipo de Investigación2</h1>
        </div>
        {investStudents2.map((student) => {
          return <Equipo key={student.id} {...student} />;
        })}
        <div className="title-prin">
          <h1 className="yellow-title">Equipo de tecnologia3</h1>
        </div>
        {investStudents3.map((student) => {
          return <Equipo key={student.id} {...student} />;
        })}
        <div className="title-prin">
          <h1 className="red-title">Equipo de tecnologia4</h1>
        </div>
        {investStudents4.map((student) => {
          return <Equipo key={student.id} {...student} />;
        })}
      </div>
      
      
    </>
  );
};
