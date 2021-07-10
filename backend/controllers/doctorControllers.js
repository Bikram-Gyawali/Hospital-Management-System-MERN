const asyncHandler = require("express-async-handler");
const Hospitals = require("../models/hospitalSchema");
const Doctors = require("../models/doctorSchema");

const doctorReview = asyncHandler(async (req, res) => {
  const { comment, userId, ratings } = req.body;
  console.log(req.params);
  try {
    const reviews = await Doctors.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          reviews: {
            comment,
            userId,
            ratings,
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

module.exports = { doctorReview };
