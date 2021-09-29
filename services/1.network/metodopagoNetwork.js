const express = require("express");
const router = express.Router();
const controller = require("../2.business/metodopagoController");
const response = require("../../network/response");
const config = require("../../config");

router.get("/", (req, res) => {
  controller
    .GetMetodoPago(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/", (req, res) => {
  controller
    .AddMetodoPago(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/saveList", (req, res) => {
  controller
    .AddListMetodoPago(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.patch("/", (req, res) => {
  controller
    .UpdateMetodoPago(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Error Interno`, 500, `${e}`);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .DeleteMetodoPago(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

module.exports = router;