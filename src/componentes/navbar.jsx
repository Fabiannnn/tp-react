import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar
        </a>
        <ul>
          <li>
            <Link to="/contador">Contador</Link>
          </li>
          <li>
            <Link to="/eventos-interesantes">Eventos Interesantes</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
