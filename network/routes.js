const express = require("express");

//networks
const thing = require("../services/1.network/thingNetwork");

const routes = (server) => {
  server.use("/thing", thing);
};

module.exports = routes;
