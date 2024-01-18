const bcryptjs=require('bcryptjs');
const User=require('../models/user.model.js')
const jwt=require('jsonwebtoken');
exports.postdatasignin=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email||!password||email==""||password==""){
        return res.status(404).json({status:404,connection:"Failed",message:"All credentials are required!!!"})
    }
    try{
    const validuser=await User.findOne({email});
    if(!validuser){
        return res.status(404).json({status:404,connection:"Failed",message:"No Valid User Found"})
    }
    const passcord=bcryptjs.compareSync(password,validuser.password);
    if(!passcord){
        return res.status(404).json({status:404,connection:"Failed",message:"Password Does not Match!"})
    }

    //Tokenize method 
    const token=jwt.sign({
        id:validuser._id,
        username:validuser.username,
        email:validuser.email
    },process.env.JSON_TOKEN_SECRETKEY);
    return res.status(200).cookie('access_token',token,{httpOnly:true}).json({message:"Signin Successful!",validuser})
    }
    catch(err){
        console.log(err);
    }
    // res.status(200).json({email,password});
}