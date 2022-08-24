const { Schema, model } = require("mongoose");

const habitSchema = new Schema(
  {
    title: {
      type: String,
      uppercase: true,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      minlength: [40, "add at least 40 of description"],
      required: [true, "description is required"],
    },
    reason: {
      type: String,
      required: [true, "please describe a reason to do it"],
    },
    created: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Habit = model("Habit", habitSchema);
module.exports = Habit;
