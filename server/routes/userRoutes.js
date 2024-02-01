const router = require("express").Router();
const {
    newUser,
    getUser,
    getUserByFId,
    getUserdata,
    profile
} = require("../controllers/userController");

// user routes
router.route("/new").post(newUser);
router.route("/:email").get(getUser);
router.route("/:username").get(getUserdata);
router.route("/:username").put(profile);
router.route("/id/:firebaseUserId").get(getUserByFId);

module.exports = router;