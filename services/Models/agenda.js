const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Id_usuario: { type: Integer, require: true },
    Id_doctor: { type: Integer, require: true },
    Fecha_hora: { type: Date, required: true },
    Bloqueado: { type: Boolean, require: true },
    Llamada: { type: Integer, require: true },
    Fecha_creacion: { type: Date, default: Date.now},
});

const model = mongoose.model("Agenda", mySchema);
module.exports = model;