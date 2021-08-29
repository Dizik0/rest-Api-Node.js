const express = require("express");
const router = express.Router();

const { products: ctrl } = require("../../controllers");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.add);

router.delete("/:contactId", ctrl.del);

router.put("/:contactId", ctrl.update);

router.patch("/:contactId/favorite", ctrl.favorite);

module.exports = router;
