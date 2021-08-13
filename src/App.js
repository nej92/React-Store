import React from "react";
import './App.css';
import ListContainer from "./components/ItemListContainer/ItemListContainer";

import NavBar from "./components/NavBar/NavBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ListContainer />
      </div>
    );
  }
}

export default App;
