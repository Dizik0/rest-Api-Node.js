const express = require("express");
const router = express.Router();
const { validation, controllerWrapper } = require("../../middlewares");
const { contacts: model } = require("../../model");
const { products: ctrl } = require("../../controllers");

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:contactId", controllerWrapper(ctrl.getById));

router.post("/", validation(model.joiPostContact), controllerWrapper(ctrl.add));

router.delete("/:contactId", controllerWrapper(ctrl.del));

router.put(
  "/:contactId",
  // Не нужная функция!
  validation(model.joiPutContact),
  controllerWrapper(ctrl.update)
);

router.patch(
  "/:contactId/favorite",
  validation(model.joiPatchContact),
  controllerWrapper(ctrl.favorite)
);

module.exports = router;
