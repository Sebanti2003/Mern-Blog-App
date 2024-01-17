const express=require('express');
const mongoose=require('mongoose');
exports.signup=(req,res)=>{
    const body=req.body;
    console.log(body);
    res.status(200).json({message:"Success",body});
}
