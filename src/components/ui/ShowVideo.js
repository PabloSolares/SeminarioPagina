import React from 'react'
import { data } from '../../data/info'

export const ShowVideo = ({nivel, numAct}) => {

  // width="800"  height="415"
  return (
    <>
    {
        data.map( e => {
            return e.nivel === nivel && e.numAct === numAct ? <div className="video-container">
            <iframe  src={e.urlVideo} title="YouTube video player"  frameborder="0" ></iframe>
        </div>  : null
        })
    }
    
    </>
  )
}
