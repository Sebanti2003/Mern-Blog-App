const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const PORT=process.env.PORT;
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to Database Blogging"))
  .catch((err) => console.log(err));
const app = express();
app.get("/", (req, res) => {
  res.send("hey!");
  console.log("hello");
});
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:8000`);
});
