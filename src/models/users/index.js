const mongoose =require("mongoose")
const uuidv1 =require("uuid/v1")
const crypto =require("crypto")//for password encryption it is from nodejs

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },

    email:{
        type:String,
        trim:true,
        required:true
    },

    hashed_password:{
        type:String,
        required:true
    },

    salt:String,

    created:{
        type:Date,
        default:Date.now
    },
    
    updated:Date

    
})

//virtual field

userSchema.virtual("password")
.set(function(password){
    //create a temporary variable called _password
    this._password=password
    //generate a timestamp
    this.salt=uuidv1()
    //encryptPassword()
    this.hashed_password=this.encryptPassword(password)
})
.get(function(){
    return this._password
})

//methods for encryption

userSchema.methods={
    encryptPassword:function(password){
        if(!password) return ""
        //encryption password from doc of crypto of node doc
        try{
            return crypto
            .createHmac("sha256",this.salt)
            .update(password)
            .digest("hex")
        }
        catch(err){
            return ""
        }
    } 
}


module.exports = mongoose.model("User",userSchema)