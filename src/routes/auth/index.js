const express =require("express")
const {signup,signin,signout}=require("../../controllers/auth")//destructured the method
const {userById}=require("../../controllers/user")//destructured the method

// const validator =require("../../validator")
const {userSignupValidator} =require("../../validator")


const router =express.Router()

router.post("/signup",userSignupValidator,signup)
router.post("/signin",signin)
router.get("/signout",signout)
router.param("userId",userById)//any route containing :userId,our app will first execute userById()



module.exports=router