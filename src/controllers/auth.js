const jwt =require("jsonwebtoken")//for creating the token with the combination of jwt_secret and user id
const dotenv  =require("dotenv")
dotenv.config()//invoke for read env file
const expressJwt=require("express-jwt")//for protecting the route,basically authorization


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

exports.signin=(req,res)=>{
    //find the user based on email
    const {email,password}=req.body
    User.findOne({email},(err,user)=>{
        //if error or no user
        if(err || !user){
            return res.status(401).json({
                error:"User with that email does not exist,please sign in"
            })
        }
        //create authenticate method in model and use here
        if(!user.authenticate(password)){
            return res.status(401).json({
                error:"Email and password does not match"
            })
        }

        //generate a token with user id and jwt_secret
        const token =jwt.sign({_id:user._id},process.env.JWT_SECRET)

        //persist the token with "t" and with expire date
        res.cookie("t",token,{expire:new Date() +9999})

        //return response with user and token to front client
        const {_id,name,email}=user
        return res.json({token, user:{_id,email,name}})
    })


}

exports.signout=(req,res)=>{
    res.clearCookie("t")
    return res.json({
        message:"Signout success!"
    })
}

//Authorization,valid user send token to server for accessing the endpoints and that will check with given secret key this method work as a middleware
exports.requireSignin=expressJwt({
    secret:process.env.JWT_SECRET
})