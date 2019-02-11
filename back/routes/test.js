let express=require('express')
let router=express.Router()
let functionsList=require('../functions.js')
let getdbo=require('../mongo-dbo-function.js')

let dbo

setTimeout(()=>{
    dbo=getdbo()
    console.log(dbo)},2000)


router.post("/add",(req,res)=>{
    functionsList.logEPTrigger(req.originalUrl)
    console.log("reqBody",req.body)
    
    dbo.collection('test').findOne({},(err,result)=>{
        console.log(result)
    })
    res.status(200).json({message:"success"})
})

module.exports=router