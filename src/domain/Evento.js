export class Evento {
  constructor(id, nombre, lugar, fechaInicio, fechaFin, precioEntrada) {
    this.id = id;
    this.nombre = nombre;
    this.lugar = lugar;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.precioEntrada = precioEntrada;
  }

  //Para crear el objeto usuario con el Json obtenido.
  static fromJson(eventoJson) {
    //const usuario = Object.assign(new Usuario(), usuarioJson) Mapea todo lo del api rest, no nos sirve.
    const evento = new Evento(eventoJson.id, eventoJson.nombre, eventoJson.locacionNombre, eventoJson.fechaDeInicio, eventoJson.fechaFinalizacion, eventoJson.precioEntrada)
    return evento
  }
}