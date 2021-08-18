import React from 'react';
import './ItemCount.css';

const ItemCount = () => {

    const [counter, setCounter] = React.useState(0);
//    const [stock, setStock] = React.useState(5);

    const btnSumar = () =>{
        if (counter === 5) {
            document.getElementById('sum').disable = true;
        } else{
            setCounter (counter + 1);
        }
    };

    const btnRestar = () =>{
        if (counter === 0) {
            document.getElementById('rest').disable = true;
        } else {
            setCounter (counter - 1);
        }
    };


    return  <div>
                <p>{counter}</p>
                <button id="sum" onClick={btnRestar}>-</button>
                <button>Agregar al carrito</button>
                <button id="rest" onClick={btnSumar}>+</button>
            </div>
}

export default ItemCount;