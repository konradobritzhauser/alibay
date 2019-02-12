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
  dbo.collection("user").insertOne(req.body, (err, result) => {
    if (err) throw err;
    console.log("success");
  });
  res.status(200).json({ message: "success" });
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
        expectedPassword = result[0].password;
        console.log("expectedPassword", expectedPassword);
        console.log("success");
      }catch{
        console.log("username doesn't exist")
      res.status(200).json({success:false})
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
            res.set("Set-Cookie",""+sessionId)
            res.status(200).json({success:true})
            return
        })
    }else{
        console.log("passwords dont match");
        res.status(200).json({success:false})
        return
    }
});
});

module.exports = router;
