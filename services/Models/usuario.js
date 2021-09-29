const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Id_usuario: { type: Number, require: true },
    Nombre: { type: String, required: true },
    Apellido: { type: String, require: true },
    Identificacion: { type: Number, require: true },
    Correo: { type: String, require: true},
    Telefono: { type: String, require: true},
    Foto: { type: String, require: true},
    Metodo_pago: { type: String, require: true},
    Ordenes: { type: String, require: true},
    Fecha_creacion: { type: Date, default: Date.now},
  
});

const model = mongoose.model("Usuario", mySchema);
module.exports = model;