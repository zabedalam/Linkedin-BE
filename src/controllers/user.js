const User =require("../models/users")
const _ =require("lodash")//it is javascript utility library it provides many functionality here in my case i will user extend()

exports.userById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"User not found"
            })
        }
        req.profile=user //adds profile object in req with user info
        next()
    })
}

//check all the conditions for checking authorization
exports.hasAuthorization=(req,res,next)=>{
    const authorized =req.profile && req.auth && req.profile._id === req.auth._id
    if(!authorized){
        return res.status(403).json({
            error:"User is not authorized to perform this action"
        })
    }
}

//finding users
exports.allUsers=(req,res)=>{
    User.find((err,users)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({
            users
        })
    }).select("name email updated created")
}

//finding a user
exports.getUser=(req,res)=>{
    req.profile.hashed_password=undefined
    req.profile.salt=undefined
    return res.json(req.profile)
}

//updating a user
exports.updateUser=(req,res,next)=>{
    let user =req.profile
    user =_.extend(user,req.body)//extend -mutate the source object
    user.updated =Date.now()
    user.save(err=>{
        if(err){
            return res.status(400).json({
                error:"You are not authorized to perform this action"
            })
        }
        user.hashed_password=undefined
        user.salt=undefined
        res.json({
                 user
        })
    })
}

//Deleting user
exports.deleteUser=(req,res,next)=>{
    let user =req.profile
    user.remove((err,user)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
       
        res.json({
                 Message:"User deleted successfully!"
        })
    })
}