let express = require("express");
let router = express.Router();
let functionList = require("../functions");
let getdbo = require("../mongo-dbo-function");
let ObjectID = require("mongodb").ObjectID;

let dbo;
setTimeout(() => (dbo = getdbo()), 2000);

// {"username":"konrad","itemId":200}
router.post("/addItem", (req, res) => {
  functionList.logEPTrigger(req.originalUrl);
  let username = req.body.username;
  console.log("username", username);
  let itemId = req.body.itemId;
  console.log("itemId", itemId);
  dbo.collection("carts").updateOne(
    { username: username },
    {
      $push: { cart: itemId }
    },
    res.status(200).json({ success: true, message: "item added to cart" })
  );
});

//expects and object such as {"username":"konrad","itemId":200}
router.post("/removeItem", (req, res) => {
  functionList.logEPTrigger(req.originalUrl);
  let username = req.body.username;
  console.log("username", username);
  let itemId = req.body.itemId;
  console.log("itemId", itemId);
  dbo
    .collection("carts")
    .find({ username: username })
    .toArray((err, result) => {
      let oldCart = result[0].cart;
      console.log("oldCart", oldCart);

      //returns the array "elem" without the first occurrence of "value to remove"
      function removeOneElem(elem, valueToRemove) {
        let occ = elem.indexOf(valueToRemove);
        // console.log("occ",occ)
        if (occ < 0) {
          return elem;
        }
        elem.splice(occ, 1);
        // console.log(elem)
        return elem;
      }
      let newCart = removeOneElem(oldCart, itemId);
      console.log("newCart", newCart);

      dbo.collection("carts").updateOne(
        { username: username },
        {
          $set: { cart: newCart }
        }
      );

      res
        .status(200)
        .json({ success: true, message: "item removed from cart" });
    });
});

//expects object such as {"username":"konrad"}
router.post("/getCart", (req, res) => {
  functionList.logEPTrigger(req.originalUrl);
  let username = req.body.username;
  console.log("username", username);
  dbo
    .collection("carts")
    .find({ username: username })
    .toArray((err, result) => {
      console.log("result", result);
      if (result[0] === undefined) {
          console.log("username not in database")
        res
          .status(200)
          .json({
            success: false,
            message: "username is undefined or not in the database"
          });
      } else {
        let cart = result[0].cart;
        console.log("cart", cart);
        res
          .status(200)
          .json({ success: true, message: "cart retrieved", results: cart });
      }
    });
});
//result returns an array with all the id numbers of all the objects

//expects object such as {"username":"konrad"}
router.post("/clearCart", (req, res) => {
  functionList.logEPTrigger(req.originalUrl);
  let username = req.body.username;
  console.log("username", username);
  dbo
    .collection("carts")
    .updateOne({ username: username }, { $set: { cart: [] } });
  res.status(200).json({ success: true, message: "cart cleared successfully" });
});

module.exports = router;
