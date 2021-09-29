const Model = require("../Models/usuarioModel");
const mongoose = require("mongoose");

const AddUsuario = async (usuario) => {
    usuario._SomeId = new mongoose.Types.ObjectId();
  const myUsuario = new Model(usuario);
  return await myUsuario.save();
};

const GetUsuario = async (myFilter) => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const usuario = await Model.find(filter);
  return usuario;
};

const UpdateUsuario = async (body) => {
  const foundUsuario = await Model.findByIdAndUpdate(body._id, body);
  const updatedUsuario = await Model.findById(body._id);
  return updatedUsuario;
};

const DeleteUsuario = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddUsuario,
  list: GetUsuario,
  update: UpdateUsuario,
  remove: DeleteUsuario,
};
