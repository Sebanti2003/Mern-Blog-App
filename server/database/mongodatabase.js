const mongoose = require("mongoose");
const databaseconnection = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("Connected to Database Blogging"))
    .catch((err) => console.log(err));
};
module.exports=databaseconnection;