const { UserModel, AddressModel } = require("../models/usermodel");
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

module.exports.completeProfile = async (req, res) => {
  try {
    const {
      fullname,
      email,
      username,
      phone,
      profilePicture,
      address: { Street, city, district, state, nationality },
    } = req.body;

    // Validate that required fields are present
    if (
      !fullname ||
      !email ||
      !username ||
      !phone ||
      !profilePicture ||
      !Street ||
      !city ||
      !district ||
      !state ||
      !nationality
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Incomplete data provided" });
    }

    // Check if the user has already completed the profile
    const user = await UserModel.findOne({
      firebaseUserId: req.params.firebaseUserId,
    });
    if (user && user.profileCompleted) {
      return res
        .status(400)
        .json({ success: false, message: "Profile already completed" });
    } else {
      // Update the user's profile in the database
      const updatedUser = await UserModel.findOneAndUpdate(
        { firebaseUserId: req.params.firebaseUserId },
        {
          fullname,
          email,
          username,
          phone,
          profilePicture,
          profileCompleted: true, // Set the profileCompleted flag to true
        },
        { new: true }
      );

      // Check if the user exists
      if (!updatedUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      // Update the user's address in the database
      const updatedAddress = await AddressModel.findOneAndUpdate(
        { userId: updatedUser.userId },
        {
          Street,
          city,
          district,
          state,
          nationality,
        },
        { new: true }
      );

      // Check if the address exists
      if (!updatedAddress) {
        return res
          .status(404)
          .json({ success: false, message: "Address not found" });
      }

      // Send a response indicating success
      res.status(200).json({
        success: true,
        message: "Profile completed successfully",
        data: updatedUser,
      });
    }
  } catch (error) {
    console.error("Error completing profile:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
