import React, { Component } from "react";

export default class DetalleEvento extends Component {
  evento = {
    id: this.props.location.state.id,
    nombre: this.props.location.state.nombre,
    ubicacion: this.props.location.state.ubicacion,
    fechaInicio: this.props.location.state.fechaInicio,
    fechaFin: this.props.location.state.fechaFin,
    precio: this.props.location.state.precio
  };
  render() {
    console.log("props son: ", this.props.location.state);
    return (
      <React.Fragment>
        <div>{this.evento.id}</div>
        <div>{this.evento.nombre}</div>
        <div>{this.evento.ubicacion}</div>
        <div>{this.evento.fechaInicio}</div>
        <div>{this.evento.fechaFin}</div>
        <div>{this.evento.precio}</div>
      </React.Fragment>
    );
  }

  cacularImporte() {
    return this.evento.cantidad * this.evento.precio;
  }
}
