let express=require("express")
let router=express.Router();
let functionsList=require("../functions")

router.post("/signup",(req,res)=>{
    functionsList.logEPTrigger(req.originalUrl);
    console.log('req.body', req.body)
    let username=req.body.username
    console.log('username', username)
    let password=req.body.password
    console.log('password', password)
    res.status(200).json({message:"success"})
})





module.exports=router