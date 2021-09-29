const Model = require("../Models/doctorModel");
const mongoose = require("mongoose");

const AddDoctor = async (doctor) => {
  const myDoctor = new Model(doctor);
  return await myDoctor.save();
};

const GetDoctor = async (myFilter) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (myFilter !== null) {
      filter = myFilter;
    }
    const doctor = Model.find(filter)
      .populate("Especialidades")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return doctor;
  });
};

const UpdateDoctor = async (body) => {
  const foundDoctor = await Model.findByIdAndUpdate(body._id, body);
  const updatedDoctoro = await Model.findById(body._id);
  return updatedDoctor;
};

const DeleteDoctor = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddDoctor,
  list: GetDoctor,
  update: UpdateDoctor,
  remove: DeleteDoctor,
};
