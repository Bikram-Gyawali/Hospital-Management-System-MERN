const route = require("express").Router();
const {
  userRegister,
  userLogin,
  individualUser,
} = require("../controllers/userControllers");


// user register
route.post("/register", userRegister);

// user login
route.post("/login", userLogin);

// // get user by id
// route.get("/:id/user", individualUser);

module.exports = route;
