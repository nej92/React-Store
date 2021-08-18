import React from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = React.useState(Number(initial));

    onAdd = () => {
        alert(`${counter} productos agregados al carro`);
    }

    const btnRestar = () =>{
        setCounter (counter - 1);
    };

    const btnSumar = () =>{
        setCounter (counter + 1);
    };

    return  <div className="btnAgregarAlCarro">
                <p>{counter}</p>
                <button onClick={btnRestar} disabled={counter <= 1}>-</button>
                <button onClick={onAdd}>Agregar al carrito</button>
                <button onClick={btnSumar} disabled={counter >= stock}>+</button>
            </div>
};

export default ItemCount;