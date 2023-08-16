import React from "react";

export const Somos = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-img">
          <img src="/assets/clase2.jpg" alt="Somos Miel" />
        </div>
      </div>
      <div className="banner-info">
        <span>
          <h1>SOMOS MIEL</h1>
          <p>
            Somos un grupo de estudiantes con la meta de capacitar a los
            docentes para que sepan como actuar y responder ante la violencia
            escolar
          </p>
        </span>
      </div>

      <div className="flex-selectors">
        <div className="selector selec-blue">
          <h6>NUESTRO TRABAJO</h6>
        </div>
        <div className="selector">
          <h6>MISIÓN Y VISION</h6>
        </div>
        <div className="selector selec-red">
          <h6>ACTIVIDADES</h6>
        </div>
      </div>

      <div className="container-somos">
        <div className="no-viole">
          <h3 className="somos-title">EDUCACIÓN SIN VIOLENCIA</h3>
          <p className="somos-para">
            Equipamos a los docentes para que los estudiantes puedan sentirse
            seguros y tranquilos dentro de sus instituciones educativas para
            poder recibir su educación de la mejor manera posible.
            <br />
            <br />
            Trabajamos codo a codo junto con los maestros y docentes para que
            estos puedan brindarles apoyo a los estudiantes que lo necesitan.
          </p>
        </div>
        <div className="mision-prin">
          <h3 className="somos-title">
            MISIÓN, VISIÓN, NUESTROS VALORES Y PRINCIPIOS
          </h3>
          <p className="somos-para">
            Todas las decisiones y acciones de MielEduca se basan en 4 pilares
            indispensables: misión, visión, valores y principios. Cada uno
            cumple una función bien definida para alcanzar nuestros objetivos:
          </p>
        </div>

        <div className="mvvp-container">
          <ul className="list-mvvp">
            <li>
              La <strong>Misión</strong> explica nuestra identidad y compromiso
              hacia la educación.
            </li>
            <li>
              La <strong>Visión</strong>se refiere a la educación que deseamos
              en las instituciones educativas.
            </li>
            <li>
              Los <strong>Valores</strong> son principios que nos permiten
              orientar e inspirar nuestra Misión y ayudan a interpretarla.
            </li>
            <li>
              Los <strong>Principios</strong> son normas que orientan nuestras
              acciones.
            </li>
          </ul>
          <div className="mision-container">
            <h4 className="second-title">MISIÓN</h4>
            <p>
              Trabajamos con maestras, maestros y su entorno para promover una
              educación libre de violencia y abuso para sus estudiantes.
            </p>
          </div>
          <div className="vision-container">
            <h4 className="second-title">VISIÓN</h4>
            <p>
              Una Guatemala donde todos los estudiantes puedan ir a la escuela
              sin miedo de que los acosen y violenten dentro de sus aulas. Que
              puedan gozar y disfrutar de su educación sin excepción alguna.
            </p>
          </div>
          <div className="valores-container">
            <h4 className="second-title">VALORES</h4>

            <ul>
              <li>
                <strong>Prevención:</strong> El principio de prevención implica
                tomar medidas proactivas para evitar la violencia en el entorno
                educativo. Esto implica identificar y abordar las causas
                subyacentes de la violencia, como la desigualdad, la exclusión y
                la falta de habilidades de resolución de conflictos.
              </li>
              <li>
                <strong>Enfoque integral:</strong> Un proyecto que promueva la
                educación sin violencia debe adoptar un enfoque integral que
                abarque todos los aspectos de la educación, incluyendo el
                currículo, las políticas escolares, la formación docente y la
                participación de la comunidad. Este enfoque se centra en
                promover valores y prácticas de no violencia en todos los
                aspectos de la experiencia educativa.
              </li>
              <li>
                <strong>Participación y empoderamiento:</strong> La
                participación activa y el empoderamiento de los estudiantes,
                docentes, familias y miembros de la comunidad son fundamentales
                para un proyecto de educación sin violencia. Esto implica
                involucrar a todos los actores relevantes en la toma de
                decisiones, promover la voz y la agencia de los estudiantes, y
                fomentar la colaboración y la corresponsabilidad.
                corresponsabilidad.
              </li>
              <li>
                <strong>Aprendizaje socioemocional:</strong>El desarrollo de
                habilidades socioemocionales es esencial para promover la
                educación sin violencia. Esto implica enseñar a los estudiantes
                a manejar sus emociones, desarrollar empatía, resolver
                conflictos de manera pacífica y cultivar relaciones saludables y
                respetuosas.
              </li>
            </ul>
          </div>
        </div>
        <div className="history">
          <h3 className="somos-title">Nuestra Historia</h3>
          <div className="year">2023</div>
          <h3 className="somos-title">NACE EDUCACIÓN SIN VIOLENCIA</h3>
          <p>
            Fundada por un grupo de jóvenes estudiantes, nace este proyecto con
            el propósito de una educación libre de violencia. El tema del
            seminario “Prevención de la violencia en contextos escolares” nos
            inspiró para buscar maneras únicas e innovadoras para combatir la
            violencia en contextos escolares, aportando así nuestro granito de
            arena.
          </p>
        </div>
      </div>
    </>
  );
};
