import React, {Component} from "react";
import './App.css';
import ListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import NavBar from "./components/NavBar/NavBar";


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          
          <ListContainer titulo="Lista de Productos" />
        </div>
        <div>
          <ItemCount stock ="5" initial ="1"/>
        </div>

      </div>
    );
  }
}

export default App;
