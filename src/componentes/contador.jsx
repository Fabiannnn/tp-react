import React, { Component } from "react";

export class Contador extends Component {
  // el estado es una propiedad que almacena todos los datos que voy a usar
  estado = {
    contador: 0,
    //tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // constructor() {
  //  super();
  //  this.incrementarContador = this.incrementarContador.bind(this);
  // }

  incrementarContador = producto => {
    console.log(producto);
    this.setState({
      contador: (this.estado.contador += 1)
    });
  };

  // o meter style={{ fontSize: 30 }} en el elemento html

  render() {
    // reemplazo className = "badge badge-primary m-2"
    // por className = {clases} si uso una variable
    // y lo reemplazo por this.obtenerClases() si abstraigo en un metodo

    return (
      <div>
        <span style={this.styles} className={this.obtenerClasesContador()}>
          {this.formatearContador()}
        </span>
        <button
          // puedo pasarle una referencia al objeto que estoy renderizando
          onClick={() => this.incrementarContador({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.mostrarLista()}

      </div>
    );
  }

  mostrarLista() {
    if (this.estado.tags.length === 0) return <p>No hay items</p>;

    return (
      <ul>
        {this.estado.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  obtenerClasesContador() {
    let clases = "badge m-2 badge-";
    return (clases += this.estado.contador === 0 ? "warning" : "primary");
  }

  formatearContador() {
    const { contador } = this.estado;
    return contador === 0 ? "Cero" : contador;
  }
}
