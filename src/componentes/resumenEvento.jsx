import React, { Component } from "react";

export default class ResumenEvento extends Component {
  evento = {
    id: this.props.id,
    nombre: this.props.nombre,
    ubicacion: this.props.ubicacion,
    fechaInicio: this.props.fechaInicio,
    fechaFin: this.props,
    precio: this.props.precio
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.evento.nombre}
        {this.evento.ubicacion}
        {this.evento.unaFechaDeInicio}
      </div>
    );
  }
}
