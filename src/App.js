import React, {
  Component
} from "react";
import {
  EventosRoutes
} from "./Routes";
import {
  BrowserRouter
} from "react-router-dom";

import "./App.css";
import 'typeface-roboto';
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faStroopwafel,
  faDollarSign,
  faMapMarkerAlt,
  faClock,
  faUndo,
  faCalendarCheck,
  faTicketAlt,
  faSearchLocation,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faDollarSign, faMapMarkerAlt, faClock, faUndo, faCalendarCheck, faTicketAlt, faSearchLocation, faUserCircle)
//import NavBar from "./componentes/navbar";

class App extends Component {
  render() {
    return (
      <div>
        { /* <NavBar /> */}
        <main className="container" >
          <BrowserRouter >
            <EventosRoutes />
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
