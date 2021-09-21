import React from 'react'
import PicadasCard from './PicadasCard'

const PicadasListConteiner = ({contPicadas}) => {
    return (
        <div>
            
                {contPicadas.map ((contPicadas) => {
                return <PicadasCard  propPicadas={contPicadas}/>
            })}
            
        </div>
    )
}

export default PicadasListConteiner;