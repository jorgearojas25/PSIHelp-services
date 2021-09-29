class MetodoPago {
    constructor(data) {
        this.Id_metodo_pago = data.Id_doctor;
        this.Numero = data.Numero;
        this.Fecha_vencimiento = data.Fecha_vencimiento;
        this.Cvc = data.Cvc;
        this.Nombre_persona = data.Nombre_persona;
        this.Fecha_creacion = data.Fecha_creacion;
    }
}

  module.exports = MetodoPago;