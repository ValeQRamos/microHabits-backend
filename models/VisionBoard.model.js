const { Schema, model } = require("mongoose");

const visionSchema = new Schema(
  {
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
      required: [true, "add at least 50 characters describing your vision"],
      minlength: [50, "add at least 50 characters describing your vision"],
      default:
        "Use this space to motivate yourself, add photos related to your goals and remember to edit this text for something you like to be reading to inspire you :) ",
    },
  },
  {
    timestamps: true,
  }
);

const VisionBoard = model("VisionBoard", visionSchema);
module.exports = VisionBoard;
