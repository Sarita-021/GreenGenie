const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firebaseUserId: {
            type: String,
        },
        username: {
            type: String,
            unique: true,
        },
        fullname: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        gender: {
            type: String,
            enum: ['M', 'F', 'O']
        },
        phone: {
            type: String,
        },
        profilePicture: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = { UserModel };
