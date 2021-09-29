const express = require("express");
const router = express.Router();
const controller = require("../2.business/doctorController");
const response = require("../../network/response");
const config = require("../../config");

router.get("/", (req, res) => {
  controller
    .GetDoctor(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/", (req, res) => {
  controller
    .AddDoctor(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.post("/saveList", (req, res) => {
  controller
    .AddListDoctor(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

router.patch("/", (req, res) => {
  controller
    .UpdateDoctor(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Error Interno`, 500, `${e}`);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .DeleteDoctor(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

module.exports = router;