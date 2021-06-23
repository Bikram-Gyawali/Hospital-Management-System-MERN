const route = require("express").Router();
const hiHospital = require("../controllers/hospitalControllers");

route.get("/", hiHospital);

module.exports = route;
