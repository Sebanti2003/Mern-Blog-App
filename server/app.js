const express = require("express");
const app = express();
const TestRouter=require('./routes/test.js')
const Signup=require('./routes/signup.js')
app.use(express.json());
app.use('/',TestRouter)
app.use('/api/users',Signup);
module.exports=app;

