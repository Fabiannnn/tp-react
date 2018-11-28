import {
  Usuario
} from "../domain/Usuario";
import {
  REST_SERVER_URL
} from "../servicios/Configuracion"

const usuario = new Usuario(1, "Pepe", "pepe@gmail.com", 500);

export class UsuarioService {

  getUsuarioByID(id) {
    if (usuario.id === id) return usuario;
  }

  /* BACKEND */
  async getUsuario(id) {
    const res = await fetch(REST_SERVER_URL + "/usuario/" + parseInt(id, 10))
    const usuarioJson = await res.json()
    return this.usuarioAsJson(usuarioJson)
  }

  usuarioAsJson(usuarioJson) {
    return Usuario.fromJson(usuarioJson)
  }
}
