const httpStatus = require("http-status");
const blogService = require("../services/blog.service");
const catchAsync = require("../utils/catchAsync");

const addBlog = catchAsync(async (req, res) => {
  const blog = await blogService.addBlog(req.body);
  res.status(httpStatus.CREATED).send(blog);
});

const getBlog = catchAsync(async (req, res) => {
  const blog = await blogService.getBlog();
  res.status(httpStatus.OK).send(blog);
});

const getBlogById = catchAsync(async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await blogService.getBlogById(blogId);

    if (!blog) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: "Blog not found" });
    }

    res.status(httpStatus.OK).send(blog);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
});

const updateBlog = catchAsync(async (req, res) => {
  const blog = await blogService.updateBlog(req.body);
  res.status(httpStatus.CREATED).send(blog);
});

module.exports = {
  addBlog,
  getBlog,
  updateBlog,
  getBlogById,
};
