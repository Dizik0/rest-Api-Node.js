const express = require("express");
const router = express.Router();
const { validate } = require("../../valiadation");
const { contacts: model } = require("../../model");
const { products: ctrl } = require("../../controllers");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validate(model.joiPostContact), ctrl.add);

router.delete("/:contactId", ctrl.del);

router.put("/:contactId", validate(model.joiPutContact), ctrl.update);

router.patch(
  "/:contactId/favorite",
  validate(model.joiPatchContact),
  ctrl.favorite
);

module.exports = router;
