class Usuario {
  constructor(data) {
    this.Nombre = data.Nombre;
    this.Password = data.Password;
    this.IsDoctor = data.IsDoctor;
    this.Correo = data.Correo;
    this.Telefono = data.Telefono;
    this.Foto = `https://i.pravatar.cc/300?u=${data.Fecha_creacion}${data.Nombre}`;
    this.Metodo_pago = data.Metodo_pago;
    this.Costo = data.Costo;
    this.Ordenes = data.Ordenes;
    this.Tarjeta_profesional = data.Tarjeta_profesional;
    this.Especialidades = data.Especialidades;
    this.Fecha_creacion = data.Fecha_creacion;
  }
}

module.exports = Usuario;
