class Especialidad {
  constructor(data) {
    this.Nombre = data.Nombre;
    this.Color = data.Color;
    this.Icono = data.Icono;
    this.Active = data.Active;
    this.Fecha_creacion = data.Fecha_creacion;
  }
}

module.exports = Especialidad;
