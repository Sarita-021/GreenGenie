const { UserModel } = require("../models/usermodel");

// Create New User Route 

module.exports.newUser = async (req, res) => {
    try {
        const { fullname, email, username, phone, profilePicture, address } =
            req.body;

        // Validate that required fields are present
        if (
            !fullname ||
            !email ||
            !username ||
            !phone ||
            !profilePicture ||
            !address
        ) {
            return res
                .status(406)
                .json({ success: false, message: "incomplete data provided" });
        }

        const user = await UserModel.findOne({
            firebaseUserId: req.body?.userId,
        });
        if (user && user.profileCompleted) {
            return res
                .status(203)
                .json({ success: true, message: "user exists", user: user });
        } else {
            // Create a new user
            const newUser = await UserModel.create(
                {
                    firebaseUserId: req.body.userId,
                    fullname,
                    email,
                    username,
                    phone,
                    profilePicture,
                    address
                },
            );
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


// update user route

module.exports.profile = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await UserModel.findOne({ username: username })
        if (user) {
            user.fullname = req.body.fullname || user.fullname;
            user.email = req.body.email || user.email;
            user.phone = req.body.phone || user.phone;
            user.profilePicture = req.body.profilePicture || user.name;
            user.address = req.body.address || user.address;
        }

        const updatedUser = await user.save();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(201).json({
            success: true,
            message: "Profile updated successfully",
            data: updatedUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// user route to get user using email to check if user is already registered

module.exports.allemail = async (req, res) => {
    const email = req.params.email;
    console.log(email)
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            res.status(200).send({ status: true, data: user });
        } else {
            res.status(200).send({ status: false, msg: "user not found through email" });
        }
    } catch (err) {
        res.status(400).send({ status: false, error: "cannot get user data" });
    }
};

// user route to get details of user using username 

module.exports.getallUserName = async (req, res) => {
    const username = req.params.username;
    try {
        const user = await UserModel.findOne({ username: username });
        if (user) {
            res.status(200).send({
                status: true, data: {
                    fullname: user.fullname,
                    email: user.email,
                    phone: user.phone,
                    address: user.address
                }
            });
        } else {
            res.status(200).send({ status: false, msg: "user not found through username" });
        }
    } catch (err) {
        res.status(400).send({ status: false, error: "cannot get user data using username " });
    }
};

// user route to verify using firebaseUserId 

module.exports.getUserByFId = async (req, res) => {
    const firebaseUserId = req.params.firebaseUserId;
    try {
        const user = await UserModel.findOne({ firebaseUserId: firebaseUserId });
        if (user) {
            res.status(200).send({ status: true, data: user });
            return;
        }
        res.status(404).send({ status: false });
    } catch (err) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};