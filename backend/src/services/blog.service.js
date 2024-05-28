const Blog = require('../models/blog');

const addBlog = async (blogData) => {
  try {
    const blog = await Blog.create(blogData);
    return blog;
  } catch (error) {
    throw new Error(`Error adding blog: ${error.message}`);
  }
};

const getBlog = async () => {
  try {
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    throw new Error(`Error fetching blogs: ${error.message}`);
  }
};

const getBlogById = async (blogId) => {
  try {
    const blog = await Blog.findById(blogId);
    return blog;
  } catch (error) {
    throw new Error(`Error fetching blog by ID: ${error.message}`);
  }
};

const updateBlog = async (blogData) => {
  try {
    const { id, ...update } = blogData;
    const updatedBlog = await Blog.findByIdAndUpdate(id, update, { new: true });
    return updatedBlog;
  } catch (error) {
    throw new Error(`Error updating blog: ${error.message}`);
  }
};

module.exports = {
  addBlog,
  getBlog,
  updateBlog,
  getBlogById,
};
