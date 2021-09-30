const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  Nombre: { type: String, required: true },
  Password: { type: String, require: true },
  Identificacion: { type: Number, require: false },
  Correo: { type: String, require: true },
  Telefono: { type: String, require: true },
  Foto: { type: String, require: false },
  Tarjeta_profesional: { type: Number, require: true },
  Especialidades: [{ type: Schema.Types.ObjectId, ref: "Especialidad" }],
  Fecha_creacion: { type: Date, default: Date.now },
});

const model = mongoose.model("Doctor", mySchema);
module.exports = model;
