const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const Hospitals = require("../models/hospitalSchema");
const Appointments = require("../models/appointmentSchema");

const appointmentDetails = asyncHandler(async (req, res) => {
  try {
    const hospitals = await Hospitals.findById(req.params.id);
    const {
      name,
      age,
      location,
      contact,
      email,
      patient,
      date,
      services,
      desc,
    } = await req.body;

    if (!name || !email || !contact || !location) {
      res.status(400);
      throw new Error("ALL FIELDS REQUIRED");
    }
    const newAppointment = new Appointments({
      name,
      age,
      location,
      contact,
      email,
      patient,
      withHospital: req.params.id,
      date,
      services,
      desc,
    });
    await newAppointment.save();
    hospitals.appointments.push(newAppointment._id);
    hospitals.save();
    res.status(200).json(newAppointment);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

module.exports = { appointmentDetails };
