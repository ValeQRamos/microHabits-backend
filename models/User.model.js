const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, "username already exists. please choose another username"],
      required: [true, "username is required"],
      minLength: 1,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    email: {
      type: String,
      unique: [true, "email already exists. please use another email"],
      match: [/^\S+@\S+\.\S+$/, "please use a valid email address"],
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    firstName: {
      type: String,
      required: [true, "first name is a required field"],
      minLength: 1,
    },
    lastName: {
      type: String,
      required: [true, "last name is a required field"],
      minLength: 1,
    },
    avatarUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/duavnrhnp/image/upload/v1662223043/profile3_c72fpw.png",
    },
    visionOne: {
      type: String,
      default:
        "https://res.cloudinary.com/duavnrhnp/image/upload/v1661380460/n1_ftfnua.jpg",
    },
    visionTwo: {
      type: String,
      default:
        "https://res.cloudinary.com/duavnrhnp/image/upload/v1661380460/n2_f95mff.jpg",
    },
    visionThree: {
      type: String,
      default:
        "https://res.cloudinary.com/duavnrhnp/image/upload/v1661380460/n3_bxjhsw.jpg",
    },
    generalVision: {
      type: String,
      default:
        "Use this space to motivate yourself, add photos related to your goals and remember to edit this text for something you like to be reading to inspire you :) ",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
