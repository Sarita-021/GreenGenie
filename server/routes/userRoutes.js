const router = require("express").Router();
const {
  newUser,
  getUser,
  getUserByFId,
  completeProfile, 
} = require("../controllers/userController");

// user routes
router.route("/user/new").post(newUser);
router.route("/users/:email").get(getUser);
router.route("/users/id/:firebaseUserId").get(getUserByFId);

// Profile completion routes
router.route("/user/complete/:firebaseUserId").post(completeProfile);
module.exports = router;