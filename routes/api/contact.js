const express = require("express");
const router = express.Router();
const { validation, controllerWrapper } = require("../../middlewares");
const { contact: model } = require("../../model");
const { products: ctrl } = require("../../controllers");
const { tokenVerification } = require("../../middlewares");

router.get(
  "/",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.getAll)
);

router.get(
  "/:contactId",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.getById)
);

router.post(
  "/",
  validation(model.joiPostContact),
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.add)
);

router.delete(
  "/:contactId",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.del)
);

router.put(
  "/:contactId",
  controllerWrapper(tokenVerification),
  validation(model.joiPutContact),
  controllerWrapper(ctrl.update)
);

router.patch(
  "/:contactId/favorite",
  controllerWrapper(tokenVerification),
  validation(model.joiPatchContact),
  controllerWrapper(ctrl.favorite)
);

router.get(
  "/users/current",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.current)
);

module.exports = router;
