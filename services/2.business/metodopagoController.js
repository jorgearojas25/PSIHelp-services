const thingStore = require("../3.store/metodopagoStore");
const config = require("../../config");
const objThing = require("../BOs/metodopagoBarrio");

const AddMetodoPago = (body) => {
  return new Promise((resolve, reject) => {
    let respuesta = new objMetodoPago(body);
    resolve(metodopagoSmetodopagotore.add(respuesta));
  });
};

const AddListMetodoPago = async (body) => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const metodopago in body) {
    if (body.hasOwnProperty(metodopago)) {
      const element = body[metodopago];
      let savedElement = await metodopagoStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetMetodoPago = (body) => {
  return new Promise((resolve, reject) => {
    resolve(metodopagoStore.list(body));
  });
};

const UpdateMetodoPago = (body) => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await metodopagoStore.update(body);
    resolve(response);
  });
};

const DeleteMetodoPago = (_id) => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await metodopagoStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddMetodoPago,
  AddListMetodoPago,
  GetMetodoPago,
  UpdateMetodoPago,
  DeleteMetodoPago,
};
