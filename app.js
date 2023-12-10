//Enable env file 
require("dotenv").config();
const express = require("express");

const cors = require("cors");

const connectToDB = require("./config/database.js");

const userRoutes = require("./routes/userRoute.js");

const app = express();

//Express middlewear

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors());

//connect mongodb database
connectToDB();

app.use("/",userRoutes);

module.exports = app;