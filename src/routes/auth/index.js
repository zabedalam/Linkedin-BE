const express =require("express")
// const postController=require("../../controllers/post")
const {signup}=require("../../controllers/auth")//destructured the method

// const validator =require("../../validator")

const router =express.Router()

router.post("/signup",signup)


module.exports=router