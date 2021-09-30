class Agenda {
  constructor(data) {
    this.Id_usuario = data.Id_usuario;
    this.Id_doctor = data.Id_doctor;
    this.Fecha = data.Fecha;
    this.Hora = data.Hora;
    this.Bloqueada = data.Bloqueada;
    this.Llamada = data.Llamada;
    this.Fecha_creacion = data.Fecha_creacion;
  }
}

module.exports = Agenda;
