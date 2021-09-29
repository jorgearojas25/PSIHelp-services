const Model = require("../Models/metodopagoModel");
const mongoose = require("mongoose");

const AddMetodoPago = async (metodo_pago) => {
    metodo_pago._SomeId = new mongoose.Types.ObjectId();
  const myMetodoPago = new Model(metodo_pago);
  return await myMetodoPago.save();
};

const GetMetodoPago = async (myFilter) => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const metodo_pago = await Model.find(filter);
  return metodo_pago;
};

const UpdateMetodoPago = async (body) => {
  const foundAgenda = await Model.findByIdAndUpdate(body._id, body);
  const updatedMetodoPago = await Model.findById(body._id);
  return updatedMetodoPago;
};

const DeleteMetodoPago = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddMetodoPago,
  list: GetMetodoPago,
  update: UpdateMetodoPago,
  remove: DeleteMetodoPago,
};