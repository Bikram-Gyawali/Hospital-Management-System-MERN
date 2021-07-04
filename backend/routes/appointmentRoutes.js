const route = require("express").Router();
const {
  appointmentDetails,
  eachHospitalAllAppointment,
  eachAppointmentDetails,
  approveAppointment,
  rejectAppointment,
  getApprovedAppointment,
} = require("../controllers/appointmentControllers");

// routes
route.post("/:id/appointment/setappointment", appointmentDetails);
route.get(
  "/:id/appointment/hospitalallappointments",
  eachHospitalAllAppointment
);
route.get("/:id/appointment/oneappointment", eachAppointmentDetails);
route.put("/:id/approved", approveAppointment);
route.put("/:id/rejected", rejectAppointment);
route.get("/:id/approvedList", getApprovedAppointment);

module.exports = route;
