const express = require("express");

//networks
const thing = require("../services/1.network/thingNetwork");
const usuario = require("../services/1.network/usuarioNetwork");
const doctor = require("../services/1.network/doctorNetwork");
const especialidad = require("../services/1.network/especialidadNetwork");
const agenda = require("../services/1.network/agendaNetwork");
const metodopago = require("../services/1.network/metodopagoNetwork");

const routes = (server) => {
  server.use("/thing", thing);
  server.use("/usuario", usuario);
  server.use("/doctor", doctor);
  server.use("/metodopago", metodopago);
  server.use("/agenda", agenda);
  server.use("/especialidad", especialidad);
};

module.exports = routes;
