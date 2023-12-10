// Here we import mongoose
const mongoose = require("mongoose");

//and then we create schema for register user details
const Schema = mongoose.Schema;
const registerUserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // lowerCase : true,
    // unique : true,
    //required : true
  },
  password: {
    type: String,
    // required : true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", registerUserSchema);
