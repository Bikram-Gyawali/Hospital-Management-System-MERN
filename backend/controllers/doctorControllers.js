const asyncHandler = require("express-async-handler");
const Hospitals = require("../models/hospitalSchema");
const Doctor = require("../models/doctorSchema");
const bcrypt= require('bcryptjs')

const doctorReview = asyncHandler(async (req, res) => {
  const { comment, userId, ratings, username, profilePic } = req.body;
  try {
    const reviews = await Doctor.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          reviews: {
            comment,
            userId,
            ratings,
            username,
            profilePic,
          },
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});


const docRegister = asyncHandler(async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const existDoc= await Doctor.findOne({email: req.body.email})
    if(existDoc) throw new Error("Doc already exist")

    // create new user
    const newDoc = new Doctor({
      name: req.body.name,
      email: req.body.email,
      spec: req.body.spec,
      exp: req.body.exp,
      contact: req.body.contact,
      workingOn: req.body.workingOn,
      graduatedFrom: req.body.graduatedFrom,
      password: hashedPassword,
    });
    const doc = await newDoc.save();
    res.status(200).json({
      _id: doc._id,
      name: doc.name,
      email: doc.email,
      spec: doc.spec,
      exp: doc.exp,
      contact: doc.contact,
      workingOn: doc.workingOn,
      graduatedFrom: doc.graduatedFrom,
    });
  } catch (error) {
    res.status(400)
    throw new Error("Failed to Register")
  }
});

const docLogin = asyncHandler(async (req, res) => {
  try {
    // check for the doc
    const doc = await Doctor.findOne({ email: req.body.email });
    if(!doc){
      res.status(400)
      throw new Error("Invalid Credientials")
    }

    // compaare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      doc.password
    );
    if(!validPassword){
      res.status(400)
      throw new Error("Invalid Credientails")
    }

    res.status(200).json({
      _id: doc._id,
      name: doc.name,
      email: doc.email,
      spec: doc.spec,
      exp: doc.exp,
      contact: doc.contact,
      workingOn: doc.workingOn,
      graduatedFrom: doc.graduatedFrom,
    });
  } catch (error) {
    res.status(400)
    throw new Error("Invalid Credientails")
  }
});

module.exports = { doctorReview, docRegister, docLogin };
