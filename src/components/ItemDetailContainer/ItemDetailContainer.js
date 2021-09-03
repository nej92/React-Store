import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = () => {
    const [datosItems, setDatosItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
      
    useEffect ( () => {
        axios.get('https://mocki.io/v1/77b95187-5fd5-4838-9304-ae786f8cf61c')  
        .then((res) => setDatosItems(res.data[1]));
            setTimeout(()=> {
                setIsLoading(false);
            }, 2000);
   }, []);
    



    return <>
        
        {isLoading ? <Spinner /> : 
            <ItemDetail dataItems={datosItems} />
        }

    </>
        
};

export default ItemDetailContainer;