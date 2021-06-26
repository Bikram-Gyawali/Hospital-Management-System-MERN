const route = require("express").Router();
const { appointmentDetails, eachHospitalAllAppointment, eachAppointmentDetails} = require("../controllers/appointmentControllers");

// routes
route.post("/:id/appointment/setappointment", appointmentDetails);
route.get("/:id/appointment/hospitalallappointments", eachHospitalAllAppointment, )
route.get("/:id/appointment/oneappointment", eachAppointmentDetails, )

module.exports = route;
