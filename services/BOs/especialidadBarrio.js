class Especialidad {
    constructor(data) {
        this.Id_especialidad = data.Id_especialidad;
        this.Nombre = data.Nombre;
        this.Active = data.Active;
        this.Fecha_creacion = data.Fecha_creacion;
    }
}

  module.exports = Especialidad;