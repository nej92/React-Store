import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ItemList.css';
import ItemCard from './Item';
import Spinner from "../Spinner/Spinner";

const ItemContainer = ({title}) => {
    const [items, setItems] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect ( () => {
        axios('https://mocki.io/v1/77b95187-5fd5-4838-9304-ae786f8cf61c')
        .then((res) => setItems(res.data));
        setTimeout(()=>{
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? <Spinner /> : 
                <div className="StyleItemContainer">
                    
                    <h1>{title}</h1>
                    {items.map((item) => {
                        return <ItemCard key={item.id} data={item} />;
                    })}

                </div>
            }
        </div>
    );
};

export default ItemContainer;