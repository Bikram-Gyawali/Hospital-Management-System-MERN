const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const Hospitals = require("../models/hospitalSchema");
const Appointments = require("../models/appointmentSchema");
const appointmentSchema = require("../models/appointmentSchema");


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

    if (!name || !contact || !location) {
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

const eachHospitalAllAppointment = asyncHandler(async (req, res) => {
  try {
    const hospital = await Hospitals.findById(req.params.id);
    let a = [];
    for (let i = 0; i < hospital.appointments.length; i++) {
      const b = await Appointments.findById(hospital.appointments[i]);
      a.push(b);
    }
    res.status(200).json(a);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const eachAppointmentDetails = asyncHandler(async (req, res) => {
  try {
    const appointment = await Appointments.findById(req.params.id);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const approveAppointment = asyncHandler(async (req, res) => {
  try {
    const appointment = await Appointments.findByIdAndUpdate(req.params.id, {
      appointDate: req.body.date,
      token: req.body.token,
      docArrival: req.body.doctime,
      assignedDoctor: req.body.assignedDoc,
      status: { pending: false, done: true, rejected: false },
    });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const getApprovedAppointment = asyncHandler(async (req, res) => {
  try {
    const approvedAppointment = await Appointments.find({
      "status.done": true,
    });
    res.status(200).json(approvedAppointment);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const rejectAppointment = asyncHandler(async (req, res) => {
  try {
    const appointment = await Appointments.findByIdAndUpdate(req.params.id, {
      status: { pending: false, done: false, rejected: true },
    });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const userAppointments= asyncHandler(async(req, res)=>{
  try {
      const user= await User.findById(req.params.id)
      const appointmentId= await user.appointmentsmade
      const userAppointments= await Appoint
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})

//route already exist
// const userIndividualAppointment= asyncHandler(async(req, res)=>{
//   try {
//       const appointments= await Appointments.find({patient: req.params.id})
//       res.status(200).json(appointments)
//   } catch (error) {
//       res.status(400)
//       throw new Error(error)
//   }
// })

module.exports = {
  appointmentDetails,
  eachHospitalAllAppointment,
  eachAppointmentDetails,
  approveAppointment,
  rejectAppointment,
  getApprovedAppointment,
  // userIndividualAppointment
};
