import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({titulo}) =>{
    
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect ( () => {
        axios.get('https://mocki.io/v1/77b95187-5fd5-4838-9304-ae786f8cf61c')
        .then((res) => setItems(res.data));

        setTimeout(()=>{
            setIsLoading(false);
        }, 2000);
    }, []);

    return <>
        <div>
            <h4>{titulo}</h4>
            {isLoading ? <Spinner /> : 
                <div className="StyleItemContainer">
                    <ItemList propItems={items} />
                </div>
            }
        </div>
    </>
};

export default ItemListContainer;