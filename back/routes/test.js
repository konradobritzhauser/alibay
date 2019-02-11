let express=require('express')
let router=express.Router()
let functionsList=require('../functions.js')

router.post("/add",(req,res)=>{
    functionsList.logEPTrigger(req.originalUrl)
    console.log("reqBody",req.body)
    
    res.status(200).json({message:"success"})
})

module.exports=router