import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./componentes/navbar";
import Contador from "./componentes/contador";
import DetalleEvento from "./componentes/detalleEvento";
import EventosInteresantes from "./componentes/eventosInteresantes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/evento/:id" component={DetalleEvento} />
            <Route path="/eventos" component={EventosInteresantes} />
            <Route path="/contador" component={Contador} />
            <Route
              path="/eventos-interesantes"
              component={EventosInteresantes}
            />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
