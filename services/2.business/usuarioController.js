const usuarioStore = require("../3.store/usuarioStore");
const config = require("../../config");
const objUsuario = require("../BOs/usuarioBarrio");

const AddUsuario = (body) => {
  return new Promise((resolve, reject) => {
    let respuesta = new objUsuario(body);
    resolve(usuarioStore.add(respuesta));
  });
};

const AddListUsuario = async (body) => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const usuario in body) {
    if (body.hasOwnProperty(usuario)) {
      const element = body[usuario];
      let savedElement = await usuarioStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetUsuario = (body) => {
  return new Promise((resolve, reject) => {
    resolve(usuarioStore.list(body));
  });
};

const UpdateUsuario = (body) => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await usuarioStore.update(body);
    resolve(response);
  });
};

const DeleteUsuario = (_id) => {
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
  AddUsuario,
  AddListUsuario,
  GetUsuario,
  UpdateUsuario,
  DeleteUsuario,
};
