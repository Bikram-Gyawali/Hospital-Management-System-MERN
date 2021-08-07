const route = require("express").Router();
const {
  registerHospital,
  loginHospital,
  individualHospital,
  upateHospital,
  addService,
  addEvents,
  addBeds,
  addContacts,
  addDoctors,
  addVaccancy,
  bedTypes,
  allDoctors,
  hospitalDetails,
  allHospitals,
  hospitalReview,
  allHospitalsEvents,
} = require("../controllers/hospitalControllers");

route.post("/registerHospital", registerHospital);
route.post("/loginHospital", loginHospital);
route.get("/allHospital", allHospitals);
route.get("/:id", individualHospital);
route.put("/:id/hospitalProfile", upateHospital);
route.put("/:id/updateHospital", upateHospital);
route.post("/:id/services/addservice", addService);
route.post("/:id/events/addEvents", addEvents);
route.post("/:id/addBeds", addBeds);
route.post("/:id/bedTypes", bedTypes);
route.post("/:id/addContacts", addContacts);
route.post("/:id/addDoctors", addDoctors);
route.post("/:id/addVaccancy", addVaccancy);
route.get("/:id/allDoctors", allDoctors);
route.get("/:id/hospitalDetails", hospitalDetails);
route.put("/:id/hospitalReviews", hospitalReview);
route.get("/allEvents", allHospitalsEvents);

module.exports = route;
