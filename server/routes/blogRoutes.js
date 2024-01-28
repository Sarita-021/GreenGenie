const { Router } = require("express");
const router = Router();
const {
  createBlog,
  getBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blogController");
const multer = require("multer");
const upload = multer({ dest: "images/" });

router.route("/create").post(upload.single("itemImages"), createBlog);
router.route("/get/all").get(getBlog);
router.route("/get/id/:id").get(getBlogById);
router.route("/delete/:id").delete(deleteBlog);

module.exports = router;
