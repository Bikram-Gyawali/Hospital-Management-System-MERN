const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    service: {
      type: String,
    },
    desc: {
      type: String,
    },
    date: {
      type: Date,
    },
    status: {
      pending: {
        type: Boolean,
        default: false,
      },
      done: {
        type: Boolean,
        default: false,
      },
      rejected: {
        type: Boolean,
        default: false,
      },
    },
    inDoor: {
      type: Boolean,
      default: false,
    },
    assignedDoctor: {
      name: String,
      spec: String,
      date: Date,
    },
    withHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospitals",
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    emergency: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointments", appointmentSchema);
