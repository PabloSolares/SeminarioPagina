import React from 'react'

export const Equipo = ({id,name,lastname,info,group}) => {
    const imagePath = `/assets/${id}.jpg`;
    return (
        <>
   

        <div className={`team-card ${group}`} >
            <div className='img-right'>
                <img src='assets/icon_user.png' alt='Maestra' />
            </div>

                <div className='img-photo'>
                    <img src={imagePath} alt={name} />
                </div>
                <div className='team-name'>
                    <h2>{name}</h2>
                    <h4>{lastname}</h4>
                    <div className='border-gray'></div>
                </div>
                <div className='team-info'>
                    <p>{info}</p>
                </div>
        </div>
        
    </>
  )
}
