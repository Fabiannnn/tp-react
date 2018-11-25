import React, { Component } from "react";
import { obtenerEventos } from "../servicios/falsoServicioEventos";
import { Link } from "react-router-dom";
//import http from "./servicios/servicioHttp";
import axios from "axios";

const apiEndpoint = "http://localhost:3001/eventos-interesantes";

export default class EventosInteresantes extends Component {
  state = {
    eventos: []
  };

  async componentDidMount() {
    const { data: eventos } = await axios.get(apiEndpoint);
    this.setState({ eventos });
  }

  acceder = evento => {
    console.log(evento);
  };

  mostrarTablaEventos() {
    return (
      <table className="table">
        <tbody>
          {this.state.eventos.map(evento => (
            <tr key={evento.id}>
              <td>
                <Link to={`/eventos/${evento.id}`}>
                  {evento.nombre} {evento.ubicacion} {evento.fechaInicio}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.eventos.length === 0 && "No hay eventos"}
        {this.mostrarTablaEventos()}
      </React.Fragment>
    );
  }
}
