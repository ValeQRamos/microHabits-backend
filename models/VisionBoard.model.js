const { Schema, model } = require("mongoose");

const visionSchema = new Schema(
  {
    visionOne: {
      type: String,
      required: [true, "please add photo one"],
      default:
        "https://res.cloudinary.com/duavnrhnp/image/upload/v1661380460/n1_ftfnua.jpg",
    },
    visionTwo: {
      type: String,
      required: [true, "please add photo two"],
      default:
        "https://res.cloudinary.com/duavnrhnp/image/upload/v1661380460/n2_f95mff.jpg",
    },
    visionThree: {
      type: String,
      required: [true, "please add photo three"],
      default:
        "https://res.cloudinary.com/duavnrhnp/image/upload/v1661380460/n3_bxjhsw.jpg",
    },
    generalVision: {
      type: String,
      required: [true, "add at least 100 characters describing your vision"],
      minlength: [100, "add at least 100 characters describing your vision"],
    },
  },
  {
    timestamps: true,
  }
);

const VisionBoard = model("VisionBoard", visionSchema);
module.exports = VisionBoard;
