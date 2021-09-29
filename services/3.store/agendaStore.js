const Model = require("../Models/agendaModel");
const mongoose = require("mongoose");

const AddAgenda = async (agenda) => {
  const myAgenda = new Model(agenda);
  return await myAgenda.save();
};

const GetAgenda = async (myFilter) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (myFilter !== null) {
      filter = myFilter;
    }
    const agenda = Model.find(filter)
      .populate("Id_usuario")
      .populate("Id_doctor")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return agenda;
  });
};

const UpdateAgenda = async (body) => {
  const foundAgenda = await Model.findByIdAndUpdate(body._id, body);
  const updatedAgenda = await Model.findById(body._id);
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
