export class Usuario {
  entradas = [];

  constructor(id, nombreUsuario, mailUsuario, saldoUsuario) {
    this.id = id;
    this.nombreUsuario = nombreUsuario;
    this.mail = mailUsuario;
    this.saldo = saldoUsuario;
  }

  //Para crear el objeto usuario con el Json obtenido.
  static fromJson(usuarioJson) {
    //const usuario = Object.assign(new Usuario(), usuarioJson) Mapea todo lo del api rest, no nos sirve.
    const usuario = new Usuario(usuarioJson.id, usuarioJson.nombreUsuario, usuarioJson.email, usuarioJson.saldoCuenta)
    return usuario
  }
}
