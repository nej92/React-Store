import React from 'react';
import './CartWidget.css';
import CartImg from './shopping-cart.png';

const CartWidget = () => {
    return <img className="CWStyle" src={CartImg} alt="carrito logo" width="50px" />;
};

export default CartWidget;