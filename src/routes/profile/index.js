const express =require("express")
const router=express.Router()

router.get("/profile",(req,res)=>{
    console.log("HI I AM FROM PROFILE ROUTER")
})

router.post("/profile",(req,res)=>{
    console.log("HI I AM FROM PROFILE ROUTER")
})

router.put("/profile",(req,res)=>{
console.log("HI I AM FROM PROFILE ROUTER")
})

router.delete("/profile",(req,res)=>{
    console.log("HI I AM FROM PROFILE ROUTER")
})

module.exports=router