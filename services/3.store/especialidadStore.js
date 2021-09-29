const Model = require("../Models/especialidadModel");
const mongoose = require("mongoose");

const AddEspecialidad = async (especialidad) => {
    especialidad._SomeId = new mongoose.Types.ObjectId();
  const myEspecialidad = new Model(especialidad);
  return await myEspecialidad.save();
};

const GetEspecialidad = async (myFilter) => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const especialidad = await Model.find(filter);
  return especialidad;
};

const UpdateEspecialidad = async (body) => {
  const foundAgenda = await Model.findByIdAndUpdate(body._id, body);
  const updatedEspecialidad = await Model.findById(body._id);
  return updatedEspecialidad;
};

const DeleteEspecialidad = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddEspecialidad,
  list: GetEspecialidad,
  update: UpdateEspecialidad,
  remove: DeleteEspecialidad,
};