import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ResumenEvento extends Component {
  evento = {
    id: this.props.id,
    nombre: this.props.nombre,
    ubicacion: this.props.ubicacion,
    fechaInicio: this.props.fechaInicio,
    fechaFin: this.props.fechaFin,
    precio: this.props.precio
  };

  render() {
    console.log("props", this.props);
    return (
      <Link
        to={{
          pathname: `/evento/${this.evento.id}`,
          state: this.evento
        }}
      >
        <div>
          {this.evento.nombre +
            "   " +
            this.evento.ubicacion +
            "   " +
            this.evento.fechaInicio +
            "   " +
            this.evento.fechaFin +
            "   " +
            this.evento.precio}
        </div>
      </Link>
    );
  }
}

//       <Link to={`/eventos/${this.evento.id}`} >
