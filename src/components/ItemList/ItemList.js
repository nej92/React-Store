import React from 'react';
import './ItemList.css';
import Item from './Item';

const ItemList = ({propItems}) => {
    
    return <>

            {propItems.map((item) => {
                return <Item key={item.name} propData={item} />
            })}
    </>
};

export default ItemList;