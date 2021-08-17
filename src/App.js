import React, {Component} from "react";
import './App.css';
import ListContainer from "./components/ItemListContainer/ItemListContainer";

import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ListContainer titulo="Lista de Productos" saludo="Bienvenidos!" />
      </div>
    );
  }
}

export default App;
