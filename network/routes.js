const express = require("express");

//networks
const thing = require("../services/1.network/thingNetwork");

const routes = (server) => {
  server.use("/thing", thing);
};

const usuario = require("../services/1.network/usuarioNetwork");

const routes = (server) => {
  server.use("/usuario", usuario);
};

const doctor = require("../services/1.network/doctorNetwork");

const routes = (server) => {
  server.use("/doctor", doctor);
};

const especialidad = require("../services/1.network/especialidadNetwork");

const routes = (server) => {
  server.use("/especialidad", especialidad);
};

const agenda = require("../services/1.network/agendaNetwork");

const routes = (server) => {
  server.use("/agenda", agenda);
};

const metodopago = require("../services/1.network/metodopagoNetwork");

const routes = (server) => {
  server.use("/metodopago", metodopago);
};

module.exports = routes;
