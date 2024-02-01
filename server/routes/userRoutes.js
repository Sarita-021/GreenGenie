const router = require("express").Router();
const {
    newUser,
    allemail,
    getUserByFId,
    getallUserName,
    profile
} = require("../controllers/userController");

// user routes
router.route("/new").post(newUser);
router.route("/username/:username").get(getallUserName);
router.route("/:email").get(allemail);
router.route("/:username").post(profile);
router.route("/id/:firebaseUserId").get(getUserByFId);

module.exports = router;