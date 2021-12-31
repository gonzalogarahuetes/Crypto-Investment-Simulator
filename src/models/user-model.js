const mongoose = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please, enter a username shorter than 15 characters"],
      trim: true,
      maxlength: 15,
    },
    email: {
      type: String,
      required: [true, "The email must be unique and valid"],
      trim: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    wallet: {
      type: mongoose.Types.ObjectId,
      //   default: {},
    },
    cash: {
      type: Number,
      default: 100000,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
