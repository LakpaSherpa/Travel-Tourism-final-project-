const express = require("express");
const destinationController = require("../controllers/destination.controller");
const verifyToken = require("../middleware/auth")


const router = express.Router();

router
  .route("/addDestination")
  .post(destinationController.addDestination);

router
  .route("/getDestination")
  .get(destinationController.getDestination);

  router
  .route("/updateDestination")
  .post(destinationController.updateDestination);



module.exports = router;
