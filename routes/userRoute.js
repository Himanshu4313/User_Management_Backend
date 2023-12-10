const express = require("express");
//import controller function
const {
  home,
  createUser,
  loggedIn,
} = require("../controllers/userController.js");

// Middlewear for checking validation for registered or loggin process

//middlewear for register user
const checkMendatroyFileds = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.json({ error: "All input fields are mandatroy." });
  } else {
    next();
  }
};

//middlewear for login user

const checkLoginFields = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ error: "All input fields are required!" });
  } else {
    next();
  }
};

const routes = express.Router();

routes.get("/", home);
routes.post("/register", checkMendatroyFileds, createUser);
routes.post("/login", checkLoginFields, loggedIn);

module.exports = routes;
