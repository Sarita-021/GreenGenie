const { Router } = require("express");
const router = Router();
const {
  createBlog,
  getBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blogController");

router.route("/create").post(createBlog);
router.route("/get/user/:userId").get(getBlog);
router.route("/get/:id").get(getBlogById);
router.route("/delete/:id").delete(deleteBlog);

module.exports = router;
