const { BlogModel } = require("../models/blogModel");

const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new BlogModel({
      title,
      content,
      image: {
        filename: req.file.filename,
        originalname: req.file.originalname,
        path: req.file.path,
      },
    });
    await newBlog.save();
    res.status(201).json({ status: true, msg: "Blog created", blog: newBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, msg: "Error creating blog" });
  }
};

const getBlog = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json({ status: true, blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, msg: "Error getting blog" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.status(200).json({ status: true, blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, msg: "Error getting blog" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deleteBlog = await BlogModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, msg: "Blog deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, msg: "Error deleting blog" });
  }
};

module.exports = { createBlog, getBlog, deleteBlog, getBlogById };
