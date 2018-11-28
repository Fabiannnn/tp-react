import {
  Entrada
} from "../domain/Entrada";
import {
  UsuarioService
} from "../servicios/UsuarioService";
import {
  EventoService
} from "../servicios/EventoService";

const UserService = new UsuarioService();
const EventosService = new EventoService();
const usuarios = UserService.getUsuarioByID(1);
const eventos = EventosService.getAllEventos();

const entradas = [
  new Entrada(1, eventos[5], usuarios),
  new Entrada(2, eventos[6], usuarios)
];

export class EntradaService {
  getEntradasUsuario(id) {
    let ordenado = entradas.sort((a, b) =>
      a.evento.fechaInicio
      .split("-")
      .reverse()
      .join()
      .localeCompare(
        b.evento.fechaInicio
        .split("-")
        .reverse()
        .join()
      )
    );
    return ordenado;
  }
}
