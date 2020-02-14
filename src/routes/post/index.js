const express =require("express")
const postController=require("../../controllers/post")

const router =express.Router()

// const getPost=(req,res)=>{
//     res.send("Hello me here")
// }

router.get("/",postController.getPost)
router.post("/post",postController.createPost)

// module.exports={
//     getPost
// }
module.exports=router