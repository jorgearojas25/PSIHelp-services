const Model = require("../Models/doctorModel");
const mongoose = require("mongoose");

const AddDoctor = async (doctor) => {
    doctor._SomeId = new mongoose.Types.ObjectId();
  const myDoctor = new Model(doctor);
  return await myDoctor.save();
};

const GetDoctor = async (myFilter) => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const doctor = await Model.find(filter);
  return doctor;
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