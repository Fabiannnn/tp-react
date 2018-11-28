import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./componentes/navbar";
import { Contador } from "./componentes/contador";
import { DetalleEvento } from "./componentes/detalleEvento";
import { EventosInteresantes } from "./componentes/eventosInteresantes";
import { MisEntradas } from "./componentes/misEntradas";

const styles = {
  pantalla: {
    marginTop: "5em"
  }
};

export const EventosRoutes = () => (
  <Router>
    <div>
      <NavBar />
      <div style={styles.pantalla}>
        <Switch>
          <Route exact path="/" component={EventosInteresantes} />
          <Route path="/detalleEvento/:id" component={DetalleEvento} />
          <Route path="/contador" component={Contador} />
          <Route path="/mis-entradas" component={MisEntradas} />
        </Switch>
      </div>
    </div>
  </Router>
);
