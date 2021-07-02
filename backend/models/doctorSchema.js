const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    exp: {
      type: Number,
    },
    spec: {
      type: String,
    },
    contacts: {
      type: Number,
    },
    email: {
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
        ratings: {
          type: Number,
          max: 5,
        },
      },
    ],
    workingOn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospitals",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctors", doctorSchema);
