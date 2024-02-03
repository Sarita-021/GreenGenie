const router = require("express").Router();
const {
    newUser,
    allemail,
    getUserByFId,
    getallUserName,
    profile,
    deleteUser
} = require("../controllers/userController");

// user routes
router.route("/new").post(newUser);
router.route("/username/:username").get(getallUserName);
router.route("/:email").get(allemail);
router.route("/:username").put(profile);
router.route("/id/:firebaseUserId").get(getUserByFId);
router.route("/id/:firebaseUserId").delete(deleteUser);

module.exports = router;