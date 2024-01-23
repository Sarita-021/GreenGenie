const { UserModel } = require("../models/usermodel");
module.exports.newUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(203).send({ status: false });
  }
};
module.exports.getUser = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.status(200).send({ status: user });
    } else {
      res.status(200).send({ status: "not found" });
    }
  } catch (err) {
    res.status(400).send({ error: "cannot get userdata" });
  }
};
module.exports.getUserByFId = async (req, res) => {
  const firebaseUserId = req.params.firebaseUserId;
  try {
    const user = await UserModel.findOne({ firebaseUserId: firebaseUserId });
    res.status(200).send({ data: user });
  } catch (err) {
    res.status(400).send({ error: "not found" });
  }
};

