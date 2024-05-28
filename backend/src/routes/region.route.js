const express = require("express");
const regionController = require("../controllers/region.controller");
const verifyToken = require("../middleware/auth")


const router = express.Router();

router
  .route("/addRegion")
  .post(regionController.addRegion);

router
  .route("/getRegion")
  .get(regionController.getRegion);

  router
  .route("/updateRegion")
  .post(regionController.updateRegion);



module.exports = router;
