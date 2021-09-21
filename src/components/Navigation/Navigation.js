import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/Picadas'>Picadas</Link>
                <Link to='/Pastas'>Empanadas</Link>
                <Link to='/Hamburguer'>Hamburguesas</Link>
                <Link to='/Pizzas'>Pizzas</Link>
            </ul>
            
        </nav>
    )
}

export default Navigation;