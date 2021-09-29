const especialidadStore = require("../3.store/especialidadStore");
const config = require("../../config");
const objEspecialidad = require("../BOs/especialidadBarrio");

const AddEspecialidad = (body) => {
  return new Promise((resolve, reject) => {
    let respuesta = new objEspecialidad(body);
    resolve(especialidadStore.add(respuesta));
  });
};

const AddListEspecialidad = async (body) => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const especialidad in body) {
    if (body.hasOwnProperty(especialidad)) {
      const element = body[especialidad];
      let savedElement = await especialidadStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetEspecialidad = (body) => {
  return new Promise((resolve, reject) => {
    resolve(especialidadStore.list(body));
  });
};

const UpdateEspecialidad = (body) => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await especialidadStore.update(body);
    resolve(response);
  });
};

const DeleteEspecialidad = (_id) => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await especialidadStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddEspecialidad,
  AddListEspecialidad,
  GetEspecialidad,
  UpdateEspecialidad,
  DeleteEspecialidad,
};
