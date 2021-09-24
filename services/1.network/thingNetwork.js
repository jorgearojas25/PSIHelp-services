const express = require("express");
const router = express.Router();
const controller = require("../2.business/thingController");
const response = require("../../network/response");
const config = require("../../config");

// Get all
//?Filter method exist on store layer, you can send a filter via body
router.get("/", (req, res) => {
  controller
    .GetThing(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

// Insert one
router.post("/", (req, res) => {
  controller
    .AddThing(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

//Save list
router.post("/saveList", (req, res) => {
  controller
    .AddListThing(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

// Update one
router.patch("/", (req, res) => {
  controller
    .UpdateThing(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Error Interno`, 500, `${e}`);
    });
});

//Delete one
router.delete("/:id", (req, res) => {
  controller
    .DeleteThing(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, `Internal Error`, 500, `${e}`);
    });
});

module.exports = router;
