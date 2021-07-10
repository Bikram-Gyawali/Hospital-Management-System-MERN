const route = require("express").Router();
const { doctorReview } = require("../controllers/doctorControllers");

route.put("/:id/doctorReview", doctorReview);

module.exports = route;
