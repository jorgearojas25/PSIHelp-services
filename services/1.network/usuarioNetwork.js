const express = require("express");
const router = express.Router();
const controller = require("../2.business/usuarioController");
const response = require("../../network/response");
const config = require("../../config");

router.get("/", (req, res) => {
  controller
    .GetUsuario(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/", (req, res) => {
  controller
    .AddUsuario(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/saveList", (req, res) => {
  controller
    .AddListUsuario(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.patch("/", (req, res) => {
  controller
    .UpdateUsuario(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Error Interno`, 500, `${e}`);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .DeleteUsuario(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

module.exports = router;