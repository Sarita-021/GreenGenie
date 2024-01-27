const router = require("express").Router();
const {
  newUser,
  getUser,
  getUserByFId,
} = require("../controllers/userController");

// user routes
router.route("/new").post(newUser);
router.route("/:email").get(getUser);
router.route("/id/:firebaseUserId").get(getUserByFId);

module.exports = router;