const express=require('express');
const dotenv = require("dotenv");
dotenv.config();
const PORT=process.env.PORT;
const app=require('./app.js');
const databaseconnection=require('./database/mongodatabase.js');
databaseconnection();
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:8000`);
});
