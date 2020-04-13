const mongoose =require("mongoose")

//https://www.npmjs.com/package/mongoose-unique-validator
//mongoose-unique-validator is a plugin which adds pre-save validation for unique fields within a Mongoose schema.
var uniquevalidator=mongoose("mongoose-unique-validator")

const profileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User first name is required!"],
        minlength:3,
        maxlength:20
    },
    surname:{
        type:String,
        required:[true,"User surname is required!"],
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        required:[true,"User Email required!"],
        unique:true
    },
    username:{
        type:String
    },
    bio:{
        type:String
    },
    title:{
        type:String
    },
    area:{
        type:String
    },
    picture:{
        type:String,
        default:"http://via.placeholder.com/360x360"
    },
    experiences:[{type:mongoose.Schema.Types.ObjectId,ref:"Experience"}],
},
   {timestamps:true} 
 )
 //Applying the unique plugin to the schema:
profileSchema.plugin(uniquevalidator)

 module.exports=mongoose.model("Profile",profileSchema)