const { UserModel } = require("../models/usermodel");

module.exports.newUser = async (req, res) => {
  try {
    const { fullname, email, username, phone, profilePicture, address } =
      req.body;
    console.log(req.body);

    // Validate that required fields are present
    if (
      !fullname ||
      !email ||
      !username ||
      !phone ||
      !profilePicture ||
      !address.street ||
      !address.city ||
      !address.district ||
      !address.state ||
      !address.nationality ||
      !address.pincode
    ) {
      return res
        .status(406)
        .json({ success: false, message: "incomplete data provided" });
    }

    const user = await UserModel.findOne({
      firebaseUserId: req.body.firebaseUserId,
    });
    if (user && user.profileCompleted) {
      return res
        .status(203)
        .json({ success: true, message: "user exists", user: user });
    } else {
      // Create a new user
      const newUser = await UserModel.create(
        {
          firebaseUserId: req.body.firebaseUserId,
          fullname,
          email,
          username,
          phone,
          profilePicture,
          address: {
            Street: address.Street,
            city: address.city,
            district: address.district,
            state: address.state,
            nationality: address.nationality,
            pincode: address.pincode,
          },
        },
      );

      // Send a response indicating success
      res.status(201).json({
        success: true,
        message: "Profile completed successfully",
        data: newUser,
      });
    }
  } catch (error) {
    console.error("Error completing profile:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports.getUser = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.status(200).send({ status: true, user });
    } else {
      res.status(200).send({ status: false, msg: "user not found" });
    }
  } catch (err) {
    res.status(400).send({ status: false, error: "cannot get user data" });
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