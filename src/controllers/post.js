const Post=require("../models/post")
const multer = require("multer");
const path = require("path");
const fs = require("fs");
exports.getPost=(req,res)=>{
    // res.send("Hello Me Here")
    // res.json({
    //     post:[
    //         {title:"first post"},
    //         {title:"second post"}
    //     ]
    // })

    const posts=Post.find().select("_id title body")
    .then(posts=>{
        res.status(200).json({
            posts:posts
        })
    })
    .catch(err=>console.log(err))
}

exports.createPost=(req,res)=>{
    const post =new Post(req.body)
    // console.log("CREATING POST: ",req.body)
    //saving the post always requied error handling

    // post.save((err,result)=>{
    //     if(err){
    //        return res.status(400).json({
    //            error:err
    //        })
    //     }
    //     res.status(200).json({
    //         post:result
    //     })
    // })
    post.save().then(result=>{
        res.status(200).json({
            post:result
        })
    })
}

const upload = multer({});
exports.uploadImage=(req,res,next)=>{

}

