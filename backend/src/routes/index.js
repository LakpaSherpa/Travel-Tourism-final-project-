const express = require("express");
const userRoute = require("./user.route");
const regionRoute = require("./region.route");
const destinatinRoute = require("./destination.route");
const blogRoute = require("./blog.route");
const uploadRouter = require("./upload.route");
const bookingRouter = require("./booking.route");

const router = express.Router();
const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/region",
    route: regionRoute,
  },
   {
    path: "/destination",
    route: destinatinRoute,
  },
   {
    path: "/blog",
    route: blogRoute,
  },
   {
    path: "/upload",
    route: uploadRouter,
  },
     {
    path: "/booking",
    route: bookingRouter,
  },
  
  
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
