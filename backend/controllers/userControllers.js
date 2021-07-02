const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");

const userRegister = asyncHandler(async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      contacts: req.body.contacts,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      contacts: user.contacts
    });
  } catch (error) {
    res.status(400)
    throw new Error("Failed to Register")
  }
});

const userLogin = asyncHandler(async (req, res) => {
  try {
    // check for the user
    const user = await User.findOne({ email: req.body.email });
    if(!user){
      res.status(400)
      throw new Error("Invalid Credientials")
    }

    // compaare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if(!validPassword){
      res.status(400)
      throw new Error("Invalid Credientails")
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      contacts: user.contacts
    });
  } catch (error) {
    res.status(400)
    throw new Error("Invalid Credientails")
  }
});

// individual user
const individualUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.param.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// update user
const updateUser = asyncHandler(async (req, res) => {
  try {
    const hospital = await Hospitals.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

module.exports = { userRegister, userLogin, updateUser, individualUser };
