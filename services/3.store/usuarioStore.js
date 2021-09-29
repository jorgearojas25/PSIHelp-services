const Model = require("../Models/usuarioModel");
const mongoose = require("mongoose");

const AddUsuario = async (usuario) => {
  const myUsuario = new Model(usuario);
  return await myUsuario.save();
};

const GetUsuario = async (myFilter) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (myFilter !== null) {
      filter = myFilter;
    }
    const usuario = Model.find(filter)
      .populate("Metodo_pago")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return usuario;
  });
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
