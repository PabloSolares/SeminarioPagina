import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Ejercicios } from '../components/ui/Ejercicios'

export function DashBoardRoutes() {
  return (       
      <Ejercicios />
  )
}

