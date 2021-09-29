class Doctor {
    constructor(data) {
        this.Id_doctor = data.Id_doctor;
        this.Nombre = data.Nombre;
        this.Apellido = data.Apellido;
        this.Identificacion = data.Identificacion;
        this.Correo = data.Correo;
        this.Telefono = data.Telefono;
        this.Foto = data.Foto;
        this.Tarjeta_profesional = data.Tarjeta_profesional;
        this.Fecha_creacion = data.Fecha_creacion;
    }
}

  module.exports = Doctor;