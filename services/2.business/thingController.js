const thingStore = require("../3.store/thingStore");
const config = require("../../config");
const objThing = require("../BOs/thingBarrio");

const AddThing = (body) => {
  return new Promise((resolve, reject) => {
    let respuesta = new objThing(body);
    resolve(thingStore.add(respuesta));
  });
};

const AddListThing = async (body) => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const thing in body) {
    if (body.hasOwnProperty(thing)) {
      const element = body[thing];
      let savedElement = await thingStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetThing = (body) => {
  return new Promise((resolve, reject) => {
    resolve(thingStore.list(body));
  });
};

const UpdateThing = (body) => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await thingStore.update(body);
    resolve(response);
  });
};

const DeleteThing = (_id) => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await thingStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddThing,
  AddListThing,
  GetThing,
  UpdateThing,
  DeleteThing,
};
