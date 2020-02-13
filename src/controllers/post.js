exports.getPost=(req,res)=>{
    // res.send("Hello Me Here")
    res.json({
        post:[
            {title:"first post"},
            {title:"second post"}
        ]
    })
}