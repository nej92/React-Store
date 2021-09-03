import React, {Component} from "react";
import './App.css';

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          
        </div>
        
        <ItemDetailContainer />

      </div>
    )
  }
}

export default App;
