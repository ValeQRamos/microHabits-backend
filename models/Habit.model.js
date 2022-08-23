const { Schema, model } = require("mongoose");

const habitSchema = new Schema(
  {
    title:{
      type:String,
      required: [true, 'title is required']
    },
    description:{
      type:String,
      required: [true, 'description is required']
    },
    reason:{
      type:String,
      required:[true,'a reason is required']
    },
    created:{
      type:Date,
      default:Date.now
    },
    author:{
      type: Schema.Types.ObjectId, ref:'User'
    }
  },
  {
    timestamps: true
  }
)

const Habit = model('Habit', habitSchema)
module.exports = Habit