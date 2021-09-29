const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Id_metodo_pago: { type: Number, require: true },
    Numero: { type: Number, required: true },
    Fecha_vencimiento: { type: Date, require: true },
    Cvc: { type: Number, require: true },
    Nombre_persona: { type: String, require: true},
    Fecha_creacion: { type: Date, default: Date.now},
});

const model = mongoose.model("MetodoPago", mySchema);
module.exports = model;