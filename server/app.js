const express = require("express");
const app = express();
const cors=require('cors');
const TestRouter=require('./routes/test.js')
const Signup=require('./routes/signup.js')
const {hi}=require('./middlewares/hi.js')

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173/',
    methods:["GET","POST","PUT","PATCH","DELETE"]
}));
app.use('/',TestRouter);


app.use('/api/users',hi)
app.use('/api/users',Signup);



module.exports=app;

