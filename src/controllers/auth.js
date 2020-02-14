const User =require("../models/users")

exports.signup=async(req,res)=>{
    //checking if user exist
    const userExist =await User.findOne({email:req.body.email})
    if(userExist)
    return res.status(403).json({
        error:"Email is taken"
    })
    //creating new user
    const user= await new User(req.body)
    await user.save()
    res.status(200).json({
        // user:user//showing all user credentials
        message:"signup success!please login"
    })
}