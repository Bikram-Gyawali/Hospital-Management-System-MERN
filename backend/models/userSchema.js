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
    age:{
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
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
    isDisabled:{
      type: Boolean,
    },
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
