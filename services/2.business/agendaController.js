const agendaStore = require("../3.store/agendaStore");
const config = require("../../config");
const objAgenda = require("../BOs/agendaBarrio");

const AddAgenda = (body) => {
  return new Promise((resolve, reject) => {
    let respuesta = new objAgenda(body);
    resolve(agendaStore.add(respuesta));
  });
};

const AddListAgenda = async (body) => {
  if (Array.isArray(body)) {
    Promise.reject("Invalid array data");
  }
  let arraySaved = [];
  for (const agenda in body) {
    if (body.hasOwnProperty(agenda)) {
      const element = body[agenda];
      let savedElement = await agendaStore.add(element);
      arraySaved.push(savedElement);
    }
  }
  return arraySaved;
};

const GetAgenda = (body) => {
  return new Promise((resolve, reject) => {
    resolve(agendaStore.list(body));
  });
};

const UpdateAgenda = (body) => {
  return new Promise(async (resolve, reject) => {
    if (!body._id) {
      reject("Invalid Data");
      return false;
    }
    const response = await agendaStore.update(body);
    resolve(response);
  });
};

const DeleteAgenda = (_id) => {
  return new Promise(async (resolve, reject) => {
    if (!_id) {
      reject("Invalid data");
    }
    try {
      const response = await agendaStore.remove(_id);
      resolve(response);
    } catch (e) {
      reject(`[Tipo barrio controller] ${e}`);
    }
  });
};

module.exports = {
  AddAgenda,
  AddListAgenda,
  GetAgenda,
  UpdateAgenda,
  DeleteAgenda,
};
