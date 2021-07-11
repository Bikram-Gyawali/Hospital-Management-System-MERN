const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    services: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    contact: {
      type: Number,
    },
    date: {
      type: Date,
    },
    time: {
      type: Date,
    },
    appointDate: {
      type: String,
    },
    docArrival: {
      type: String,
    },
    token: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    status: {
      pending: {
        type: Boolean,
        default: true,
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
    followUp: {
      type: Date,
    },
    withHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospitals", //pRms id
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", //logged user ko id
    },
    emergency: {
      type: Boolean,
      default: false,
    },
    reqPickup: {
      type: Boolean,
      default: false,
    },
    bill: {
      type: Boolean,
      default: false,
    },
    medicines: [
      {
        desc: String,
        disease: String,
        timeInterval: Number,
        time: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointments", appointmentSchema);
