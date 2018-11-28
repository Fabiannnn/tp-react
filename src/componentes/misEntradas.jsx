import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { EntradaService } from "../servicios/EntradaService";
import { ResumenEntrada } from "../componentes/resumenEntrada";

const styles = {
  precio: {
    height: 50,
    padding: "3em"
  }
};

export class MisEntradas extends Component {
  constructor(props) {
    super(props);
    this.entradasService = new EntradaService();
    this.removerEntrada = this.removerEntrada.bind(this);
    this.state = {
      entradas: this.entradasService.getEntradasUsuario(0)
    };
  }
  render() {
    console.log(this.state.entradas);
    if (this.state.entradas.length > 0) {
      return (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {this.state.entradas.map(entrada => (
              <ResumenEntrada
                funcionRemover={this.removerEntrada}
                entrada={entrada}
                key={entrada.id}
                fullScreen={false}
              />
            ))}
          </Grid>
          <Grid item xs={12} style={styles.precio}>
            <Typography gutterBottom variant="h4" align="center">
              Saldo: $ {this.state.entradas[0].usuario.saldo}
            </Typography>
          </Grid>
        </Grid>
      );
    } else {
      return <p>No hay entradas.</p>;
    }
  }

  removerEntrada = id => {
    this.setState(state => {
      const entradas = state.entradas.filter(item => item.id !== id);
      return {
        entradas
      };
    });
  };
}

export default withStyles(styles)(MisEntradas);
