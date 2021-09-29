const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  Id_usuario: { type: Schema.ObjectId, ref: "Usuario" },
  Id_doctor: { type: Schema.ObjectId, ref: "Doctor" },
  Fecha_hora: { type: Date, required: true },
  Bloqueado: { type: Boolean, require: true, default: false },
  Llamada: { type: String, require: true, default: "" },
  Fecha_creacion: { type: Date, default: Date.now },
});

const model = mongoose.model("Agenda", mySchema);
module.exports = model;
