const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  Nombre: { type: String, required: true },
  Active: { type: Boolean, require: true },
  Fecha_creacion: { type: Date, default: Date.now },
});

const model = mongoose.model("Especialidad", mySchema);
module.exports = model;
