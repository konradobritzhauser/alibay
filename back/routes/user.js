let express = require("express");
let router = express.Router();
let functionsList = require("../functions");
let getdbo = require("../mongo-dbo-function.js");

let dbo;

setTimeout(() => {
  dbo = getdbo();
}, 2000);


let sessionIdGenerator=()=>Math.floor(Math.random()*1000000000)

router.post("/signup", (req, res) => {
  functionsList.logEPTrigger(req.originalUrl);
  console.log("req.body", req.body);
  let username = req.body.username;
  console.log("username", username);
  let password = req.body.password;
  console.log("password", password);

  //check if username already exists
  dbo.collection("user").find({username:username}).toArray((err,result)=>{
    if(err) throw err
    console.log("Checking if username exists")
    if(result.length!==0){
      console.log("existing result",result)
      console.log("username already exists!!!")
      res.status(200).json({success:false,message:"username already exists. please try another"})
      return
    }else{
      dbo.collection("user").insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log("user created and in db");
        //add user cart to cart collection
        let dbObject={}
        dbObject.username=username
        dbObject.cart=[]
        dbo.collection("carts").insertOne(dbObject,(err,result)=>{
          console.log("cart created and in db")
        })
      });
      res.status(200).json({ success:true,message: "Signed up successfully" });
    }
  }
  )
  
});

router.post("/login", (req, res) => {
  functionsList.logEPTrigger(req.originalUrl);
  let username = req.body.username;
  console.log("username", username);
  let submittedPassword = req.body.password;
  console.log("submittedPassword", submittedPassword);
  let expectedPassword;
  dbo
    .collection("user")
    .find({ username: username })
    .toArray((err, result) => {
      if (err) throw err;
      
      console.log("result", result);
      try{
        if(result[0].username===undefined){throw "username doesnt exist"}
        expectedPassword = result[0].password;
        console.log("expectedPassword", expectedPassword);
        console.log("success");
      }catch{
        console.log("username doesn't exist")
      res.status(200).json({success:false,message:"username doesnt exist"})
      return
    }
      

      
    if(expectedPassword===submittedPassword){
        console.log("passwords match")
        let sessionId=sessionIdGenerator();
        console.log('sessionId', sessionId)
        let sessionsElem={sessionId:sessionId,username:username}
        dbo.collection('sessions').insertOne(sessionsElem,(err,result)=>{
            if(err) throw err
            console.log("sessions element inserted into sessions collection")
            res.cookie("__sid",`${sessionId}`)
            // res.set('Set-Cookie', `_sss_=${sessionId}`)
            res.status(200).json({success:true,message:"logged in successfully"})
            return
        })
    }else{
        console.log("passwords dont match");
        res.status(200).json({success:false,message:"passwords dont match"})
        return
    }
});
});

module.exports = router;
