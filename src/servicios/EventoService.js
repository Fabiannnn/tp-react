import {
  Evento
} from "../domain/Evento";
import {
  REST_SERVER_URL
} from "../servicios/Configuracion"

const eventos = [
  new Evento(
    1,
    "Hosen Fest",
    "Club Ciudad",
    "10-11-18 22:00",
    "15-11-18 22:00",
    100
  ),
  new Evento(
    2,
    "Noel Gallagher",
    "Luna Park",
    "12-11-18 23:00",
    "17-11-18 23:00",
    200
  ),
  new Evento(
    3,
    "Fiesta Clandestina",
    "Groove",
    "12-11-18 21:00",
    "17-11-18 21:00",
    300
  ),
  new Evento(
    4,
    "Padel Master",
    "La Rural",
    "15-11-18 19:00",
    "20-11-18 19:00",
    400
  ),
  new Evento(
    5,
    "LEGO Fun Fest",
    "La Rural",
    "15-11-18 12:30",
    "21-11-18 12:30",
    500
  ),
  new Evento(
    6,
    "Solid Rock",
    "Tecnópolis",
    "19-11-18 23:00",
    "27-11-18 23:00",
    600
  ),
  new Evento(
    7,
    "Fiesta D-lirante",
    "Palermo Club",
    "18-11-18 23:00",
    "28-11-18 23:00",
    700
  ),
  new Evento(
    8,
    "Hosen Fest 2",
    "Club Ciudad",
    "23-11-18 20:00",
    "29-11-18 20:00",
    900
  ),
  new Evento(
    9,
    "Foster the People",
    "Estadio Obras",
    "22-11-18 23:00",
    "30-11-18 23:00",
    800
  )
];

export class EventoService {
  getAllEventos() {
    /* Muy piola para ordenar
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
    */
    eventos.sort(function (a, b) {
      return new Date(b.fechaInicio) - new Date(a.fechaInicio);
    });
    return eventos;
  }
  //Si o si tiene que ser un number porque sino pincha.
  getEventoById(id) {
    return eventos.find(evento => evento.id === parseInt(id, 10));
  }

  /* BACKEND */
  async getEventosInteresantes(id) {
    const res = await fetch(REST_SERVER_URL + "/eventosInteresantes/" + parseInt(id, 10))
    const eventoJson = await res.json()
    eventoJson.map((eventoJson) => Evento.fromJson(eventoJson))
    return eventoJson
  }

  eventoAsJson(eventoJson) {
    return Evento.fromJson(eventoJson)
  }
}
