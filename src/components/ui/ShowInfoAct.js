import React from 'react'
import { data } from '../../data/info'

export const ShowInfoAct = ({nivel, numAct}) => {
  return (
    <>
    {
        data.map( e => {
            return e.nivel === nivel && e.numAct === numAct ? <div className='actInfo-container'>{e.actInfo}</div> : null
        })
    }
    
    </>
  )
}
