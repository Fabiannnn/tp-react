import React, { Component } from "react";
import { Route } from "react-router-dom";

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
          <Route path="/eventos-interesantes" component={EventosInteresantes} />
          <Route path="/contador" component={Contador} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
