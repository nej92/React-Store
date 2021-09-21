import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import axios from 'axios';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () =>{
    
    const [items, setItems] = useState([]);
        
    useEffect ( () => {
        axios.get('https://mocki.io/v1/77b95187-5fd5-4838-9304-ae786f8cf61c')
        .then((res) => setItems(res.data));

    }, []);

    return <>
        <div>
            <div className="StyleItemContainer">
                <ItemList propItems={items} />
            </div>
        </div>
    </>
};

export default ItemListContainer;