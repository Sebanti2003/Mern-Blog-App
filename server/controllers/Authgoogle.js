const mongoose=require('mongoose');
const User=require('../models/user.model.js')
const jwt=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');
exports.getpost=async(req,res,next)=>{
    const reqbody=req.body;
    const {email,photoURL,displayName}=reqbody;
    console.log(reqbody);
    const user=await User.find({email});
    if(user){
        const token=jwt.sign({id:user._id},process.env.JSON_TOKEN_SECRETKEY,{expiresIn:'1d'});
        return res.status(200).cookie('google_auth_token',token,{httpOnly:true}).json({message:"Login Successful with google authentication",body:user})
    }else{
        const generatepasssword=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
        const hasspassword=bcryptjs.hashSync(generatepasssword,10);
        const username=displayName.toLowerCase().split(' ').join('')+Math.random().toString(36).slice(-4)
        const newuser=await User.create({username:username,email:email,password:hasspassword,profilephoto:photoURL});
        const token=jwt.sign({id:newuser._id},process.env.JSON_TOKEN_SECRETKEY);
        return res.status(200).cookie('google_auth_token',token,{httpOnly:true}).json({message:"Google authentication complete",body:newuser});
    }
    next();
}