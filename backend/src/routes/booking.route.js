const express = require("express");
const bookingController = require("../controllers/booking.controller");
const verifyToken = require("../middleware/auth")


const router = express.Router();

router
  .route("/addBooking")
  .post(bookingController.addBooking);

router
  .route("/getBooking")
  .get(bookingController.getBooking);

  router
  .route("/deleteBooking")
  .post(bookingController.deleteBooking);

 



module.exports = router;
