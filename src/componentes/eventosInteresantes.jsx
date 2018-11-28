import React, { Component } from "react";
import { ResumenEvento } from "../componentes/resumenEvento";
import { EventoService } from "../servicios/EventoService";
import { Evento } from "../domain/Evento";
//import { Usuario } from "../domain/Usuario";
//import { PruebaID } from "../servicios/Configuracion";
import Paper from '@material-ui/core/Paper';
import { UsuarioService } from "../servicios/UsuarioService";

export class EventosInteresantes extends Component {
  constructor(props) {
    super(props);
    this.eventoService = new EventoService();
    this.usuarioService = new UsuarioService();
    this.state = {
      //eventos: this.eventoService.getAllEventos(),
      usuario: {},
      eventos: []
    };
  }

  render() {
    return (
      <Paper>
        {this.state.eventos.map(evento => (
          <ResumenEvento evento={evento} key={evento.id} />
        ))}
      </Paper>
    );
  }
  /*
  async componentWillMount() {
    try {
        const res = await this.eventosService.getAllEventos(PruebaID)
        const eventosJson = await res.json()
        this.setState({
            eventos: eventosJson.map((eventoJson) => Evento.fromJson(eventoJson))
        })
    } catch (e) {
        this.errorHandler(e)
    }
  }
  /* BACKEND */
  async componentWillMount() {
    try {
      const user = await this.usuarioService.getUsuario(1)
      const eventosint = await this.eventoService.getEventosInteresantes(1)
      this.setState({
        usuario: user,
        eventos: eventosint.map((eventoJson) => Evento.fromJson(eventoJson))
      })
      console.log(this.state.usuario)
      console.log(this.state.eventos)
    } catch (e) {
      this.errorHandler(e)
    }
  }
}