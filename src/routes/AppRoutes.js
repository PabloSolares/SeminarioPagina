import React from "react";
import {  Route, Routes } from "react-router-dom";
import NavBar from "../components/ui/Navbar";
import { Inicio } from "../components/ui/Inicio";
import { Somos } from "../components/ui/Somos";
import { GetStudents } from "../helpers/GetStudents";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { Ejercicios } from "../components/ui/Ejercicios";
import { Footer } from "../components/ui/Footer";
import { Actividades } from "../components/ui/Actividades";

export const AppRoutes = () => {
  return (
    <div id="content">
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<Somos />} />
        <Route path="/nuestro-equipo" element={<GetStudents />} />
        <Route path="/actividades" element={<Actividades />} />

        <Route path="/ejercicios" element={<DashBoardRoutes />}>
          
          <Route path="/ejercicios/:nivel/:act" element={<Ejercicios />}>
            <Route
              path="/ejercicios/:nivel/:act/:type"
              element={<Ejercicios />}
            />
          </Route>
        </Route>
      </Routes>
      <Footer  />

    </div>
  );
};
