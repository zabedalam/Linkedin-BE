const express =require("express")
// const postController=require("../../controllers/post")
const {getPost,createPost}=require("../../controllers/post")//destructured the method
const {userById}=require("../../controllers/user")//destructured the method

const {requireSignin}=require("../../controllers/auth")//destructured the method

const validator =require("../../validator")

const router =express.Router()

// const getPost=(req,res)=>{
//     res.send("Hello me here")
// }

router.get("/",getPost)
router.post("/post",requireSignin,validator.createValidator,createPost)

router.param("userId",userById)//any route containing :userId,our app will first execute userById()

// module.exports={
//     getPost
// }
module.exports=router