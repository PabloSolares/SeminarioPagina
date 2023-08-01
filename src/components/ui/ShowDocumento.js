import ReactPDF from '@react-pdf/renderer'
import React from 'react'
import { Documento } from './Documento'

export const ShowDocumento = () => {
  return (
    ReactPDF.renderToFile(<Documento />)
  )
}
