import {
    Evento
} from "./Evento";
import {
    Usuario
} from "./Usuario"

export class Entrada {
    constructor(id, unEvento, unAsistente) {
        this.id = id
        this.evento = unEvento
        this.usuario = unAsistente
    }
    asignarEvento(id, nombre, lugar, fechaInicio, fechaFin, precioEntrada) {
        this.evento = new Evento(id, nombre, lugar, fechaInicio, fechaFin, precioEntrada)
    }
    asignarAsistente(id, usuario, usuarioEmail) {
        this.usuario = new Usuario(id, usuario, usuarioEmail)
    }
    asignarId(id) {
        this.id = id
    }
}