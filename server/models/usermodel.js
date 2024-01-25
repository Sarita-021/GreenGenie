const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firebaseUserId: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "addresses",
      required: true,
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const AddressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "users",
    },
    Street: {
      type: String,
    },
    city: {
      type: String,
    },
    district: {
      type: String,
    },
    state: {
      type: String,
    },
    nationality: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AddressModel = mongoose.model("addresses", AddressSchema);
const UserModel = mongoose.model("users", UserSchema);

module.exports = { UserModel, AddressModel };
