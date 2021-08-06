const route = require("express").Router();
const { doctorReview, docRegister, docLogin } = require("../controllers/doctorControllers");

route.put("/:id/doctorReview", doctorReview);
route.post("/doc_login", docLogin)
route.post("/doc_register", docRegister)

module.exports = route;
