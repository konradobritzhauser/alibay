let express = require("express");
let router = express.Router();
let functionsList = require("../functions");
let getdbo = require("../mongo-dbo-function.js");

let dbo;

setTimeout(() => {
  dbo = getdbo();
}, 2000);

setTimeout(() => {
  dbo = getdbo();
  console.log(dbo);
}, 2000);

router.post("/signup", (req, res) => {
  functionsList.logEPTrigger(req.originalUrl);
  console.log("req.body", req.body);
  let username = req.body.username;
  console.log("username", username);
  let password = req.body.password;
  console.log("password", password);

  res.status(200).json({ message: "success" });
});

module.exports = router;
