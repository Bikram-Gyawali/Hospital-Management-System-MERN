const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    exp: {
      type: String,
    },
    spec: {
      type: String,
    },
    contact: {
      type: Number,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    pic: {
      type: String,
    },
    doctorId: String,
    graduatedFrom: {
      type: String,
    },
    newDate: {
      type: Date,
    },
    reviews: [
      {
        comment: String,
        userId: String,
        username: String,
        profilePic: String,
        date: {
          type: Date,
          default: Date.now,
        },
        ratings: {
          type: Number,
          max: 5,
        },
      },
    ],
    workingOn: {
      type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctors", doctorSchema);
