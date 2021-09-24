const Model = require("../Models/thingModel");
const mongoose = require("mongoose");

const AddThing = async (thing) => {
  thing._SomeId = new mongoose.Types.ObjectId();
  const myThing = new Model(thing);
  return await myThing.save();
};

const GetThing = async (myFilter) => {
  let filter = {};
  if (myFilter !== null) {
    filter = myFilter;
  }
  const thing = await Model.find(filter);
  return thing;
};

const UpdateThing = async (body) => {
  const foundThing = await Model.findByIdAndUpdate(body._id, body);
  const updatedThing = await Model.findById(body._id);
  return updatedThing;
};

const DeleteThing = (_id) => {
  return Model.findByIdAndDelete(_id);
};

module.exports = {
  add: AddThing,
  list: GetThing,
  update: UpdateThing,
  remove: DeleteThing,
};
