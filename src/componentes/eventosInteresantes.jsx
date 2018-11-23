import React, { Component } from "react";
import { obtenerEventos } from "../servicios/falsoServicioEventos";

export default class EventosInteresantes extends Component {
  estado = {
    eventos: obtenerEventos()
  };

  acceder = evento => {
    console.log(evento);
  };

  mostrarTablaEventos() {
    return (
      <table className="table">
        <tbody>
          {this.estado.eventos.map(evento => (
            <tr key={evento.id} onClick={() => this.acceder(evento)}>
              <td>{evento.nombre}</td>
              <td>{evento.ubicacion}</td>
              <td>{evento.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.estado.eventos.length === 0 && "No hay eventos"}
        {this.mostrarTablaEventos()}
      </React.Fragment>
    );
  }
}
