const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
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
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Unable to create new User", error.message);
  }
});

const userLogin = asyncHandler(async (req, res) => {
  try {
    // check for the user
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    console.log(user);
    // compaare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = { userRegister, userLogin };
