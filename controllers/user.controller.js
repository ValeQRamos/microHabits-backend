const mongoose  = require("mongoose");
const User = require("../models/User.model");
const { clearRes } = require("../utils/utils");

exports.getLoggedUser = (req, res) => {
  res.status(200).json({ user: req.user });
};

exports.getUserById = async (req, res) => {
  const {id} = req.params;

  try {
    const user = await User.findById(id)
    res.status(200).json({user})
    
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({errorMessage: error.message})
    }
    if (error.code === 11000){
      return res.status(400).json({
        errorMessage: "Error"
      })
    }
    return res.status(500).json({errorMessage: error.message})
  }
}

exports.editProfile = async (req, res) => {
  const {role, password, ...restUser} = req.body
  const {_id} = req.user

  try {
    const user = await User.findByIdAndUpdate(_id, {...restUser}, {new:true})
    const newUser = clearRes(user.toObject())
    res.status(200).json({user: newUser})
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({errorMessage: error.message})
    }
    if (error.code === 11000){
      return res.status(400).json({
        errorMessage: "Error"
      })
    }
    return res.status(500).json({errorMessage: error.message})
  }
}

exports.deleteProfile = async (req, res) => {
  const {_id, username} = req.user

  try {
    const user = await User.findByIdAndRemove(_id)
    return res.status(200).json({successMessage: `${username} removed`})
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({errorMessage: error.message})
    }
    if (error.code === 11000){
      return res.status(400).json({
        errorMessage: "Error"
      })
    }
    return res.status(500).json({errorMessage: error.message})
  }
}