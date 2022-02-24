const express = require('express');
const router = express.Router();

const controller = require("../controllers/user.controller.js");
const validator = require("../validators/user.validator.js");

const { checkValidationResult, createValidationFor } = validator;

router.post("/", createValidationFor('create'), checkValidationResult, controller.create);
router.put("/:id", createValidationFor('update'), checkValidationResult, controller.update);
router.delete("/:id", createValidationFor('remove'), checkValidationResult, controller.remove);
router.get("/:id", createValidationFor('findOne'), checkValidationResult, controller.findOne);
router.get("/", controller.findAll);

module.exports = router;
