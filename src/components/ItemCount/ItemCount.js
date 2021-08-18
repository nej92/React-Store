import React from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = React.useState(Number(initial));

    const btnSumar = () =>{
        if (counter >= stock) {
            document.getElementById('sum').disable = true;
        } else{
            setCounter (counter + 1);
        }
    };

    onAdd = () => {
        alert(`${counter} productos agregados al carro`);
    }

    const btnRestar = () =>{
        if (counter <= initial) {
            document.getElementById('rest').disable = true;
        } else {
            setCounter (counter - 1);
        }
    };


    return  <div className="btnAgregarAlCarro">
                <p>{counter}</p>
                <button id="sum" onClick={btnRestar}>-</button>
                <button onClick={onAdd}>Agregar al carrito</button>
                <button id="rest" onClick={btnSumar}>+</button>
            </div>
}

export default ItemCount;