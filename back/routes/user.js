let express = require("express");
let router = express.Router();
let functionsList = require("../functions");
let getdbo = require("../mongo-dbo-function.js");

let dbo;

setTimeout(() => {
  dbo = getdbo();
}, 2000);



router.post("/signup", (req, res) => {
  functionsList.logEPTrigger(req.originalUrl);
  console.log("req.body", req.body);
  let username = req.body.username;
  console.log("username", username);
  let password = req.body.password;
  console.log("password", password);
  dbo.collection('user').insertOne(req.body,(err,result)=>{
    if(err) throw err
    console.log('success')
  })
  res.status(200).json({ message: "success" });
});

module.exports = router;
