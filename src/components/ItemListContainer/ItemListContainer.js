import React from 'react';
import './ItemListContainer.css';
import ItemContainer from '../ItemList/ItemList';

const ListContainer = ({titulo}) =>{
    return <div>
                <h3 className="titulo">{titulo}</h3> 
                <ItemContainer title="Products"/>
            </div>
};
 
export default ListContainer;