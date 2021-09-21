import React from 'react';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import DessertConteiner from '../../views/DessertConteiner/DessertConteiner';
import EmpanadasConteiner from '../../views/EmpanadasConteiner/EmpanadasConteiner';
import HamburguerConteiner from '../../views/HamburguerConteiner/HamburguerConteiner';
import PizzasConteiner from '../../views/PizzasConteiner/PizzasConteiner';

const NavBar = () => {
  return  <>
    <BrowserRouter>
      <nav className="NavBarStyle">
      <Navigation />
      <Switch>
      
            <Route path='/Dessert' component={DessertConteiner} />
            <Route path='/Empanadas' component={EmpanadasConteiner} />
            <Route path='/Hamburguer' component={HamburguerConteiner} />
            <Route path='/Pizzas' component={PizzasConteiner} />
            <CartWidget />
        
      </Switch>
      </nav>
    </BrowserRouter>
  </>
};
  
export default NavBar;