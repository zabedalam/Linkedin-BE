const express =require("express")
const {userById,allUsers,getUser,updateUser,deleteUser}=require("../../controllers/user")//destructured the method
const {requireSignin}=require("../../controllers/auth")//destructured the method



const router =express.Router()


router.get("/users",allUsers)
router.get("/user/:userId",requireSignin,getUser)//requireSignin() working here as a middleware,bcoz only user can change his own profile update
router.put("/user/:userId",requireSignin,updateUser)
router.delete("/user/:userId",requireSignin,deleteUser)

router.param("userId",userById)//any route containing :userId,our app will first execute userById()



module.exports=router