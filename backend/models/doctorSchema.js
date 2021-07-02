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
    doctorId: String,
    graduatedFrom: {
      type: String,
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
