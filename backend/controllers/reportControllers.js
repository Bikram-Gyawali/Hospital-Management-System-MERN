const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const path = require("path");
const fs = require("fs");

const { userLogin } = require("./userControllers");
const { json } = require("express");

const saveReports = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(req.file);
    if (user.reports === "") {
      await User.findByIdAndUpdate(req.params.id, {
        reports: req.file.filename,
      });
    } else {
      const filePath = path.join(
        __dirname,
        `../uploads/reports/${user.reports}`
      );
      //   fs.unlinkSync(filePath, (err) => {
      //     //delets previous file
      //     if (err) throw new Error(err);
      //   });
      await User.findByIdAndUpdate(req.params.id, {
        reports: req.file.filename,
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const downloadReport = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const filePath = path.join(__dirname, `../uploads/reports/${user.reports}`);
    res.download(filePath);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

module.exports = { saveReports, downloadReport };
