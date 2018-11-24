import React, { Component } from "react";

import "./App.css";
import NavBar from "./componentes/navbar";
import Contador from "./componentes/contador";
import EventosInteresantes from "./componentes/eventosInteresantes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <EventosInteresantes />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
