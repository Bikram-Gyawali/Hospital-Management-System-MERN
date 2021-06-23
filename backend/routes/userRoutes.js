const route = require("express").Router();
const { userRegister, userLogin } = require("../controllers/userControllers");

// user register
route.post("/register", userRegister);

// user login
route.post("/login", userLogin);

module.exports = route;
