import React, {useState, useEffect} from 'react';
import './ItemList.css';
import ItemCard from './Item';

const ItemContainer = ({title}) => {
    const [items, setItems] = useState ([]);

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setItems(data))
    }, []);

    return (
        <div className="StyleItemContainer">
            <h1>{title}</h1>
            {items.map((item) => {
                return <ItemCard key={item.id} data={item} />;
            })}
        </div>
    );
};

export default ItemContainer;