const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    contact1: {
      type: String,
      required: true,
    },
    contact2: {
      type: String,
      required: true,
    },
    email: {
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
        },
        desc: String,
        serviceCharge: Number,
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

    emergencyContacts: [
      {
        name: {
          type: String,
        },
        number: {
          type: Number,
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
    vaccancy: [
      {
        status: Boolean,
        position: String,
        amount: Number,
        desc: String,
      },
    ],
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

hospitalSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // Password is not modified
    next();
  }
  // Password is modified
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

hospitalSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Hospitals", hospitalSchema);
