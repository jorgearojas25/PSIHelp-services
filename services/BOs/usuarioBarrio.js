class Usuario {
  constructor(data) {
    this.Nombre = data.Nombre;
    this.Apellido = data.Apellido;
    this.Identificacion = data.Identificacion;
    this.Correo = data.Correo;
    this.Telefono = data.Telefono;
    this.Foto = data._Foto;
    this.Metodo_pago = data.Metodo_pago;
    this.Ordenes = data.Ordenes;
    this.Fecha_creacion = data.Fecha_creacion;
  }
}

module.exports = Usuario;
