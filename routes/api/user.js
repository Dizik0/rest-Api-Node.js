const express = require("express");

const router = express.Router();

const { validation, controllerWrapper } = require("../../middlewares");
const { users: model } = require("../../model");
const { auth: ctrl } = require("../../controllers");

router.post(
  "/register",
  validation(model.joiRegSchema),
  controllerWrapper(ctrl.register)
);

router.post(
  "/login",
  validation(model.joiRegSchema),
  controllerWrapper(ctrl.login)
);

// router.get("/logout", ctrl.logout);

module.exports = router;
