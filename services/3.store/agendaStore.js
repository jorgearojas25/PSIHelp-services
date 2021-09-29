const Model = require("../Models/agendaModel");
const mongoose = require("mongoose");

const AddAgenda = async (agenda) => {
    agenda._SomeId = new mongoose.Types.ObjectId();
  const myAgenda = new Model(agenda);
  return await myAgenda.save();
};

const GetAgenda = async (myFilter) => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const agenda = await Model.find(filter);
  return agenda;
};

const UpdateAgenda = async (body) => {
  const foundAgenda = await Model.findByIdAndUpdate(body._id, body);
  const updatedDAgenda = await Model.findById(body._id);
  return updatedAgenda;
};

const DeleteAgenda = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddAgenda,
  list: GetAgenda,
  update: UpdateAgenda,
  remove: DeleteAgenda,
};