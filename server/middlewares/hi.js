exports.hi=(req,res,next)=>{
    console.log("Hiiiii from the middleware");
    next();
}