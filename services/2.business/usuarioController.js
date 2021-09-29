const usuarioStore = require("../3.store/usuarioStore");
const config = require("../../config");
const objUsuario = require("../BOs/usuarioBarrio");

const AddUsuraio = (body) => {
  return new Promise((resolve, reject) => {
    let respuesta = new objUsuario(body);
    resolve(usuarioStore.add(respuesta));
  });
};

const AddListUsuraio = async (body) => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const usuario in body) {
    if (body.hasOwnProperty(thing)) {
      const element = body[thing];
      let savedElement = await usuarioStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetUsuraio = (body) => {
  return new Promise((resolve, reject) => {
    resolve(usuarioStore.list(body));
  });
};

const UpdateUsuraio = (body) => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await usuarioStore.update(body);
    resolve(response);
  });
};

const DeleteUsuraio = (_id) => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await usuarioStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddUsuraio,
  AddListUsuraio,
  GetUsuraio,
  UpdateUsuraio,
  DeleteUsuraio,
};
