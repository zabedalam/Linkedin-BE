const express =require("express")
const postController=require("../../controllers/post")

const router =express.Router()

// const getPost=(req,res)=>{
//     res.send("Hello me here")
// }

router.get("/",postController.getPost)

// module.exports={
//     getPost
// }
module.exports=router