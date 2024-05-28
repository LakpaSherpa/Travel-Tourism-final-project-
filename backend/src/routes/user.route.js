const express = require("express");
const Validator = require("../middleware/validate");
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/auth")
const {
  userValidationRules,
  validate,
} = require("../validations/user.validation");

const router = express.Router();

router
  .route("/signup")
  .post(userController.signup);

router
  .route("/signin")
  .post(userController.signin);

router
  .route("/profile")
  .get(verifyToken,userController.getProfile);

module.exports = router;
