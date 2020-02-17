const express = require("express")
const morgan =require("morgan")//this is need for middleware
const mongoose =require("mongoose")
const bodyParser =require("body-parser")//package required for parsing json data
const expressValidator=require("express-validator")
const cookieParser = require('cookie-parser')//for parsing the token to requested user with valid id which is used for identified the user
const dotenv  =require("dotenv")
dotenv.config()//invoke for read env file

mongoose.connect(process.env.MONGO_SRV,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>console.log("DB CONNECTED"))
mongoose.connection.on("error", err =>{
    console.log(`DB connection error : ${err.message}`)
})

//bring routes
// const {getPost} =require("./src/routes/post")
const postRoutes =require("./src/routes/post")
const authRoutes =require("./src/routes/auth")
const userRoutes =require("./src/routes/users")



const server =express()//create server from express module

// server.get("/",(req,res)=>{
//     res.send("Hello")
// })

const myMiddleware=(req,res,next)=>{
console.log("Middleware applied")
next()
}
//middleware
server.use(morgan("dev"))//middleware 
server.use(myMiddleware)//middleware
server.use(bodyParser.json())//it is important to keep before route,this is for parsing json data
server.use(expressValidator())//error handling
server.use(cookieParser())
server.use("/",postRoutes)
server.use("/",userRoutes)
server.use("/",authRoutes)
server.use(function(err,req,res,next){//this function from express-jwt doc for unauthorized error handling
    if(err.name==="UnauthorizedError"){
        res.status(401).json({
            error:"Unauthorized"
        })
    }
})



const port =process.env.PORT || 3000

server.listen(port,()=>console.log(`Hi i am listing the server:${port}`))