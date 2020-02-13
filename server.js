const express = require("express")
const morgan =require("morgan")//this is need for middleware
const mongoose =require("mongoose")
const dotenv  =require("dotenv")
dotenv.config()//invoke for read env file

mongoose.connect(process.env.MONGO_SRV,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>console.log("DB CONNECTED"))
mongoose.connection.on("error", err =>{
    console.log(`DB connection error : ${err.message}`)
})

//bring routes
// const {getPost} =require("./src/routes/post")
const postRoutes =require("./src/routes/post")

const server =express()//create server from express module

// server.get("/",(req,res)=>{
//     res.send("Hello")
// })

const myMiddleware=(req,res,next)=>{
console.log("Middleware applied")
next()
}
server.use(morgan("dev"))//middleware 
server.use(myMiddleware)//middleware

server.use("/",postRoutes)


const port =process.env.PORT || 3000

server.listen(port,()=>console.log(`Hi i am listing the server:${port}`))