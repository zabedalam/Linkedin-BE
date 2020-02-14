const express =require("express")
const {signup}=require("../../controllers/auth")//destructured the method

// const validator =require("../../validator")
const {userSignupValidator} =require("../../validator")


const router =express.Router()

router.post("/signup",userSignupValidator,signup)


module.exports=router