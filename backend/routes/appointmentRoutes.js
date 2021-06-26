const route = require("express").Router();
const { appointmentDetails } = require("../controllers/appointmentControllers");

// routes
route.post("/:id/appointment/setappointment", appointmentDetails);

module.exports = route;
