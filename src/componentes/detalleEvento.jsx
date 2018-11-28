import React, { Component } from "react";
import { EventoService } from "../servicios/EventoService";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
//import { Entrada } from "../domain/Entrada";
//import { UsuarioService } from "../servicios/UsuarioService"

const styles = {
  root: {
    flexGrow: 1
  }
};

export class DetalleEvento extends Component {
  constructor(props) {
    super(props);
    this.eventoService = new EventoService();
    //this.usuarioService = new UsuarioService();
    this.state = {
      contador: 0,
      evento: this.props.location.state,
      errorMessage: ""
    };
  }
  //Lo usamos en un try.
  generarError(errorMessage) {
    console.log(errorMessage);
    console.log("state", this.state);
    this.setState({
      errorMessage: errorMessage.toString()
    });
  }

  sumar() {
    this.cambiarContador(this.state.contador + 1);
  }

  restar() {
    if (this.state.contador > 0) {
      this.cambiarContador(this.state.contador - 1);
    }
  }

  cambiarContador(n) {
    this.setState({ contador: n });
  }

  render() {
    return (
      <div className={styles.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h3>
              <CardContent>
                <FontAwesomeIcon icon="search-location" />
                {this.state.evento.lugar}
              </CardContent>
            </h3>
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <FontAwesomeIcon icon="clock" />
              {this.state.evento.fechaInicio} - {this.state.evento.fechaFin}
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <FontAwesomeIcon icon="dollar-sign" />
              {this.state.evento.precioEntrada}
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              id="sumar"
              size="medium"
              color="primary"
              onClick={event => {
                this.sumar();
              }}
            >
              +
            </Button>{" "}
            <br />
            {this.state.contador}
            <br />
            <Button
              variant="contained"
              id="restar"
              size="medium"
              color="secondary"
              disabled={this.state.contador === 0}
              onClick={event => {
                this.restar();
              }}
            >
              -
            </Button>
          </Grid>
          <Grid item xs={6}>
            <br />
            <br />
            <FontAwesomeIcon icon="dollar-sign" />
            {this.state.contador * this.state.evento.precioEntrada}
          </Grid>
          <h1 align="center">
            <Button
              variant="contained"
              id="sumar"
              size="medium"
              color="primary"
              onClick={event => {
                this.comprarEntradas();
              }}
            >
              Comprar Entrada
            </Button>{" "}
            <br />
          </h1>
        </Grid>
      </div>
    );
  }

  cacularImporte() {
    return this.evento.cantidad * this.evento.precio;
  }

  comprarEntradas() {
    //let entradaNueva = new Entrada(3, this.evento, this.usuarioService.usuario)
  }
}
