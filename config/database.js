const mongoose = require("mongoose");

//Function for connect to database
const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((conn) => {
      console.log("Database is connect to ", conn.connection.host);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
