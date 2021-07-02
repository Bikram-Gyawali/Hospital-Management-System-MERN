const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
    },
    age: {
      type: Number,
    },
    contacts: {
      type: Number,
    },
    appointmentsmade: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointments",
    },
    reports: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
    },
    medicines: [
      {
        desc: String,
        disease: String,
        date1: [Date],
      },
    ],
    // funds: {
    //   status: Boolean,
    //   default: false
    // }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Users", userSchema);
