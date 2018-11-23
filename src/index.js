import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import Contador from "./componentes/contador";
import EventosInteresantes from "./componentes/eventosInteresantes";

ReactDOM.render(<EventosInteresantes />, document.getElementById("root"));
serviceWorker.unregister();
