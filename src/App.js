import React, {Component} from "react";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navigation from "./components/Navigation/Navigation";
import PicadasConteiner from './views/PicadasConteiner/PicadasConteiner';
import PastasConteiner from "./views/PastasConteiner/PastasConteiner";
import HamburguerConteiner from './views/HamburguerConteiner/HamburguerConteiner';
import PizzasConteiner from './views/PizzasConteiner/PizzasConteiner';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className='NavBarStyle'>
        
         <Navigation />
         <Switch>
            <Route path='/' exact component={ItemListContainer} /> 
            <Route path='/Picadas' component={PicadasConteiner} />
            <Route path='/Pastas' component={PastasConteiner} />
            <Route path='/Hamburguer' component={HamburguerConteiner} />
            <Route path='/Pizzas' component={PizzasConteiner} />
          </Switch>
        </nav>
        
      </BrowserRouter>
    )
  }
}

export default App;
