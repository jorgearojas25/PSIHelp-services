const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Id_doctor: { type: Number, require: true },
    Nombre: { type: String, required: true },
    Apellido: { type: String, require: true },
    Identificacion: { type: Number, require: true },
    Correo: { type: String, require: true},
    Telefono: { type: String, require: true},
    Foto: { type: String, require: true },
    Tarjeta_profesional: { type: Number, require: true },
    Especialidades: { type: String, require: true},
    Fecha_creacion: { type: Date, default: Date.now},
});

const model = mongoose.model("Doctor", mySchema);
module.exports = model;