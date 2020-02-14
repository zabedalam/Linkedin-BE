exports.createValidator=(req,res,next)=>{
    //title
    req.check("title","write a title").notEmpty();
    req.check("title","title must be between 4 to 150 char").isLength({
        min:4,
        max:150
    })

    //body
    req.check("body","write a body").notEmpty();
    req.check("body","title must be between 4 to 2000 char").isLength({
        min:4,
        max:2000
    })

    //check errors
    const errors =req.validationErrors();
    //if error show the first one as they happen
    if(errors){
        const firstError=errors.map(error=>error.msg)[0];
        return res.status(400).json({
            error:firstError
        })
    }
    //proceed to next middleware
    next()
}   

exports.userSignupValidator=(req,res,next)=>{
    //name is not null and between 4-10 char
    req.check("name","Name is required").notEmpty()
    //email is not null and valid and normalized
    req.check("email","Email must be between 3 to 32 char")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min:4,
        max:2000
    })
    //check for password
    req.check("password","Password is required").notEmpty()
    req.check("password")
    .isLength({min:8})
    .withMessage("Password must contain at least 8 char")
    .matches(/\d/)
    .withMessage("Password must contain a number")

    //check errors
    const errors =req.validationErrors();
    //if error show the first one as they happen
    if(errors){
        const firstError=errors.map(error=>error.msg)[0];
        return res.status(400).json({
            error:firstError
        })
    }
    //proceed to next middleware
    next()

}