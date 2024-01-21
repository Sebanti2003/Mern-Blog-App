const express = require("express");
const app = express();
const cors=require('cors');
const TestRouter=require('./routes/test.js')
const Signup=require('./routes/signup.js');
const Signinrouter=require('./routes/signin.js')
const {hi}=require('./middlewares/hi.js');
const GoogleAuth = require("./routes/googleauth.js");


//important middlewares
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173/',
    methods:["GET","POST","PUT","PATCH","DELETE"]
}));

//test router
app.use('/',TestRouter);

//test middleware
app.use('/api/users',hi)

//auth routes
app.use('/api/users',Signup);
app.use('/api/users',Signinrouter);
app.use('/api/google',GoogleAuth)


module.exports=app;

