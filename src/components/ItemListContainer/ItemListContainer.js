import React from 'react';
import './ItemListContainer.css';

const ListContainer = ({titulo, saludo}) =>{
    return <div>
                <h3 className="titulo">{titulo}</h3> 
                <h2>{saludo}</h2>
            </div>
};
 
export default ListContainer;