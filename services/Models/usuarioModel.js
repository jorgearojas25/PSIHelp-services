const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  Nombre: { type: String, required: true },
  Password: { type: String, require: false },
  IsDoctor: { type: Boolean, require: true },
  Correo: { type: String, require: true },
  Telefono: { type: String, require: true },
  Foto: { type: String },
  Metodo_pago: { type: Schema.Types.ObjectId, ref: "MetodoPago" },
  Ordenes: { type: String, require: true },
  Tarjeta_profesional: { type: Number, require: true },
  Especialidades: [{ type: Schema.Types.ObjectId, ref: "Especialidad" }],
  Fecha_creacion: { type: Date, default: Date.now },
  Numero_citas: { type: Number, required: true, default: 0 },
  Costo: { type: Number, required: true, default: 15000 },
  Calificaion: { type: Number, required: true, default: 5 },
  Favorites: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
});

const model = mongoose.model("Usuario", mySchema);
module.exports = model;
