const express =require("express")
// const postController=require("../../controllers/post")
const {getPost,createPost}=require("../../controllers/post")//destructured the method
const {requireSignin}=require("../../controllers/auth")//destructured the method

const validator =require("../../validator")

const router =express.Router()

// const getPost=(req,res)=>{
//     res.send("Hello me here")
// }

router.get("/",requireSignin,getPost)
router.post("/post",validator.createValidator,createPost)

// module.exports={
//     getPost
// }
module.exports=router