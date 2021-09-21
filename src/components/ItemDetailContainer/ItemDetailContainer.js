import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import axios from 'axios';



const ItemDetailContainer = () => {
    const [datosItems, setDatosItems] = useState([]);
    
      
    useEffect ( () => {
        axios.get('https://mocki.io/v1/77b95187-5fd5-4838-9304-ae786f8cf61c')  
        .then((res) => setDatosItems(res.data[1]));
            
    }, []);
    



    return <>
            <ItemDetail dataItems={datosItems} />
    </>
        
};

export default ItemDetailContainer;