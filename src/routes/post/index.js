const express =require("express")
// const postController=require("../../controllers/post")
const {getPost,createPost}=require("../../controllers/post")//destructured the method

const validator =require("../../validator")

const router =express.Router()

// const getPost=(req,res)=>{
//     res.send("Hello me here")
// }

router.get("/",getPost)
router.post("/post",validator.createValidator,createPost)

// module.exports={
//     getPost
// }
module.exports=router