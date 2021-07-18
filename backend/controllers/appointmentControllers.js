const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const Hospitals = require("../models/hospitalSchema");
const Appointments = require("../models/appointmentSchema");
var https = require("https");
const {
  sendNotification,
  playersId,
  externalUserId,
} = require("./notificationControllers.js");


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
    let message = {
      app_id: "561aeb8f-a644-4d7c-9c8b-0a2de9878340",
      contents: {
        en: `Your Appointment Has been approved and set to ${req.body.appointDate} with ${req.body.assignedDoc} Token.No:${req.body.token}`,
      },
      headings: {
        en: "Doctor Sahab",
      },
      include_external_user_ids: externalUserId,
      // include_player_ids: playersId, //to all subscribed devices
      // included_segments: ["Subscribed Users"], //to all subscribers
    };
    await sendNotification(message);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const followUpAppointment = asyncHandler(async (req, res) => {
  try {
    const doctor = req.body.doctorId;
    if (doctor) {
      const newDate = await Appointments.findByIdAndUpdate(req.params.id, {
        followUp: req.body.followUp,
        token: req.body.token,
        docArrival: req.body.doctime,
        assignedDoctor: req.body.assignedDoc,
        status: { pending: false, done: true, rejected: false },
      });
      res.status(200).json(newDate);
    }
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
    let id = "60e07fac9f5def32385cc005";
    console.log("exid", id);
    let message = {
      app_id: "565f762f-a729-44e0-9d04-39ffa4564580",
      contents: {
        en: `Your appointmet has been scheduleld with dr ${req.body.assignedDoc} on ${req.body.date} ${req.body.docArrival}`,
      },
      headings: {
        en: "Doctor Sahab",
      },
      include_external_user_ids: [id],
      // include_player_ids: playersId, //to all subscribed devices
      // included_segments: ["Subscribed Users"], //to all subscribers
    };
    // await sendNotification(message);
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

const userIndividualAppointment = asyncHandler(async (req, res) => {
  try {
    const appointments = await Appointments.find({ patient: req.params.id });
    let message = {
      app_id: "561aeb8f-a644-4d7c-9c8b-0a2de9878340",
      contents: { en: "Apply Appointments To any hopital u want" },
      headings: {
        en: "Doctor Sahab",
      },
      include_external_user_ids: externalUserId,
      // include_player_ids: playersId, //to all subscribed devices
      // included_segments: ["Subscribed Users"], //to all subscribers
    };
    await sendNotification(message);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

const medicineDetails = asyncHandler(async (req, res) => {
  try {
    // console.log(req.body);
    // const { desc, disease, timeInterval, time } = req.body;
    const medInfo = await Appointments.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          medicines: {
            desc: req.body.desc,
            disease: req.body.disease,
            timeInterval: req.body.timeInterval,
            time: req.body.time,
          },
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(medInfo);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

module.exports = {
  appointmentDetails,
  eachHospitalAllAppointment,
  eachAppointmentDetails,
  approveAppointment,
  rejectAppointment,
  getApprovedAppointment,
  userIndividualAppointment,
  followUpAppointment,
  medicineDetails,
};
