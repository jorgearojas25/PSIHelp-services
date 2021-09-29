const doctorStore = require("../3.store/doctorStore");
const config = require("../../config");
const objDoctor = require("../BOs/doctorBarrio");

const AddDoctor = (body) => {
  return new Promise((resolve, reject) => {
    let respuesta = new objDoctor(body);
    resolve(doctorStore.add(respuesta));
  });
};

const AddListDoctor = async (body) => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const doctor in body) {
    if (body.hasOwnProperty(doctor)) {
      const element = body[doctor];
      let savedElement = await doctorStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetDoctor = (body) => {
  return new Promise((resolve, reject) => {
    resolve(doctorStore.list(body));
  });
};

const UpdateDoctor = (body) => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await doctorStore.update(body);
    resolve(response);
  });
};

const DeleteDoctor = (_id) => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await doctorStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddDoctor,
  AddListDoctor,
  GetDoctor,
  UpdateDoctor,
  DeleteDoctor,
};
