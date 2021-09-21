import React, {useState, useEffect} from 'react'
import axios from "axios"
import PicadasCard from './PicadasCard'
import {Link} from 'react-router-dom'

const PicadasConteiner = () => {

    const [picadas, setPicadas] = useState([]);

    useEffect (() => {
        axios.get('https://mocki.io/v1/7222f2d8-f366-4522-a83a-3f2979e81787')
        .then((res) => setPicadas(res.data))
        
    }, []);

    return (
        <div className=''>
            {picadas.map ((contPicadas) => {
                return <>
                <div key={contPicadas.id}>
                    <Link to={`/detail/${contPicadas.id}`}>
                        <PicadasCard  propPicadas={contPicadas}/>
                    </Link>
                </div> 
                </>
            })}
        </div>
    )
}

export default PicadasConteiner;