import React, { Component } from "react";
import EventosInteresantes from "./eventosInteresantes";

export default class ResumenEvento extends Component {
  evento = {
    nombre: "unNombre",
    ubicacion: "unaUbicacion",
    fechaInicio: "unaFechaDeInicio",
    fechaFin: "unaFechaDeFin",
    precio: 100
  };

  render() {
    return (
      <div>
        {this.evento.nombre}
        {this.evento.ubicacion}
        {this.evento.unaFechaDeInicio}
      </div>
    );
  }
}
