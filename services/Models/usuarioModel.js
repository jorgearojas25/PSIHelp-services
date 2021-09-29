const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  Nombre: { type: String, required: true },
  Apellido: { type: String, require: true },
  Identificacion: { type: String, require: true },
  Correo: { type: String, require: true },
  Telefono: { type: String, require: true },
  Foto: { type: String },
  Metodo_pago: { type: Schema.Types.ObjectId, ref: "MetodoPago" },
  Ordenes: { type: String, require: true },
  Fecha_creacion: { type: Date, default: Date.now },
});

const model = mongoose.model("Usuario", mySchema);
module.exports = model;
