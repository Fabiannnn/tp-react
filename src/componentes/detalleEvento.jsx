import React, { Component } from "react";

export default class DetalleEvento extends Component {
  evento = {
    nombre: "unNombre",
    ubicacion: "unaUbicacion",
    fechaInicio: "unaFechaDeInicio",
    fechaFin: "unaFechaDeFin",
    precio: 100,
    cantidad: 0
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>{this.evento.nombre}</h1>
          <h4>{this.evento.ubicacion}</h4>
          <h4>
            {this.evento.fechaInicio} -{this.evento.fechaFin}
          </h4>
          <h4>{this.evento.precio}</h4>
        </div>
        <hr />
        <div>
          <input type="number" />
          <h4>${this.calcularImporte}</h4>
          <button>Comprar</button>
        </div>
      </React.Fragment>
    );
  }

  cacularImporte() {
    return this.evento.cantidad * this.evento.precio;
  }
}
