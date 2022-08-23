const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, 'username already exists. please choose another username'],
      required: [true, 'username is required'],
      minlength:1
    },
    password: {
      type: String,
      required: [true, 'password is required']
    },
    email: {
      type:String,
      unique:[true,'email already exists. please use another email'],
      match: [/^\S+@\S+\.\S+$/, "please use a valid email address"]
    },
    role: {
      type: String,
      enum:['Admin','User'],
      default:'User'
    },
    firstName: {
      type: String,
      required: [true, 'first name is a required field'],
      minlength: 1
    },
    lastName: {
      type: String,
      required:[true, 'last name is a required field'],
      minlength: 1
    },
    avatarUrl: {
      type: String,
      default:'https://res.cloudinary.com/duavnrhnp/image/upload/v1661271063/profileIcon_s61be0.png'
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;