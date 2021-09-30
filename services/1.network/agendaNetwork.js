const express = require("express");
const router = express.Router();
const controller = require("../2.business/agendaController");
const response = require("../../network/response");
const config = require("../../config");

router.get("/", (req, res) => {
  controller
    .GetAgenda(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/filter", (req, res) => {
  controller
    .AddAgenda(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/", (req, res) => {
  controller
    .AddAgenda(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/saveList", (req, res) => {
  controller
    .AddListAgenda(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.patch("/", (req, res) => {
  controller
    .UpdateAgenda(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Error Interno`, 500, `${e}`);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .DeleteAgenda(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

module.exports = router;
