const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contacts: {
      type: Array,
      default: [],
      required: true,
    },
    emailId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      min: 8,
      required: true,
    },
    services: [
      {
        topic: {
          type: String,
          required: true,
        },
        desc: String,
        serviceImg: String,
      },
    ],
    hospitalImages: [
      {
        img: {
          type: String,
        },
      },
    ],
    hospitalProfilePics: {
      type: String,
    },
    hospitalDescription: {
      type: String,
    },
    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctors",
      },
    ],
    contacts: [
      {
        name: {
          type: String,
          required: true,
        },
        number: {
          type: Number,
          required: true,
        },
      },
    ],
    emergencyContacts: [
      {
        name: {
          type: String,
          required: true,
        },
        number: {
          type: Number,
          required: true,
        },
      },
    ],
    ambulance: Number,
    beds: {
      total: Number,
      occupied: Number,
      empty: Number,
    },
    bedTypes: {
      icu: Number,
      ventilator: Number,
      other: Number,
    },
    vaccancy: {
      status: Boolean,
      position: String,
      amount: Number,
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointments",
      },
    ],

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
    patient: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    events: [
      {
        eventName: String,
        date: Date,
        desc: String,
        eventImg: String,
      },
    ],
    // subscription:{
    // prototype ma rakhni last ma time pugyo vani inegrate garni
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospitals", hospitalSchema);
