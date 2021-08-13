import React from 'react';
import './NavBar.css';

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return  <nav className="NavBarStyle">
                <h2 className="react">R54CT</h2>
                <CartWidget />
            </nav>;
};
  
  export default NavBar;