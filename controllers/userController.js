// import schema of user
const { default: mongoose } = require("mongoose");
const user = require("../models/registerUserModel.js");

//home
exports.home = (req, res) => {
  res.json({ message: "Hello server" });
};

// controller function for create user
exports.createUser = async (req, res) => {
  try {
    //extract information from client side
    const { name, email, password } = req.body;
    console.log(req.body);
    const Reguser = await user.create({
      name,
      email,
      password,
    });

    //if we store user data successfully then give some message
    res.status(201).json({
      success: true,
      message: "User Registered Successfully!",
      Reguser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to create user",
    });
  }
};


// controller function for logged In
exports.loggedIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userEmail = await user.findOne({ email: email });
    // const userPassword = await user.exists({password : password});

    if (userEmail) {
      if (await user.findOne({ password: password })) {
        res.json({ message: "User Login successfully!" });
      } else {
        res.json({ Message: "Password is wrong" });
      }
    } else {
      res.json({ message: "No account associated with this email." });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to Logged In",
    });
  }
};
