let express = require("express");
let router = express.Router();
let functionList = require("../functions");
let getdbo = require("../mongo-dbo-function");

let dbo;
setTimeout(() => (dbo = getdbo()), 2000);

router.post("/addItem", (req, res) => {
  functionList.logEPTrigger(req.originalUrl);
  let reqBody = req.body;

  try {
    console.log("reqBody", reqBody);
    let title = reqBody.title;
    console.log("title", title);
    let category = reqBody.category;
    console.log("category", category);
    let description = reqBody.description;
    console.log("description", description);
    let price = reqBody.price;
    console.log("price", price);
    let fd = reqBody.fd;
    console.log("fd", fd);
    let likes = reqBody.likes;
    console.log("likes", likes);
    let seller=reqBody.seller;
    console.log('seller', seller)
    let reqBodyArr = [title, category, description, price, fd, likes,seller];
    reqBodyArr.every(elem => {
        // console.log("elem",elem)
        // console.log(elem == undefined);
      if (elem==undefined || elem.length===0) {
        throw (`parameter is missing`);
      }
      return true
    });
  } catch (e) {
    console.log(e);
    res.status(200).json({ success: false, message: "parameters missing" });
    return;
  }

  dbo.collection("items").insertOne(reqBody, (err, result) => {
    if (err) throw err;
    console.log(result)
    console.log("success");
    res.status(200).json({ success: true });
  });
});

router.post("/removeItem", (req, res) => {
  functionList.logEPTrigger(req.originalUrl);
  let reqBody = req.body;
  console.log("reqBody", reqBody);
  let itemId = reqBody.itemId;
  console.log("itemId", itemId);
  dbo.collection("items").deleteOne({ id: itemId }, (err, result) => {
    if (err) throw err;
    console.log(result)
  });
});
// make a function to 
router.post("/findItemById",(req,res)=>{
    functionList.logEPTrigger(req.originalUrl);
    let id=req.id
    console.log('id', id)
    dbo.collection("items").find({id:{$oid:"5c62170b72445f3950b0d593"}}).toArray((err,result)=>{
        console.log("result",result)
        console.log(result[0]._id.toString())
    })
})



module.exports = router;
