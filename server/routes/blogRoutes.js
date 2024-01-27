const { Router } = require("express");
const router = Router();
const {
  createBlog,
  getBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blogController");

router.route("/create").post(createBlog);
router.route("/get/all").get(getBlog);
router.route("/get/id/:id").get(getBlogById);
router.route("/delete/:id").delete(deleteBlog);

module.exports = router;
