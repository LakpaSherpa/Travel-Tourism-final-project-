const express = require("express");
const blogController = require("../controllers/blog.controller");
const verifyToken = require("../middleware/auth")


const router = express.Router();

router
  .route("/createBlog")
  .post(blogController.addBlog);

router
  .route("/getBlog")
  .get(blogController.getBlog);

  router
  .route("/getBlogById")
  .post(blogController.getBlogById);

  router
  .route("/updateBlog")
  .post(blogController.updateBlog);



module.exports = router;
