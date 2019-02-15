let express = require('express')
let router = express.Router()
let functionList = require('../functions')
let getdbo = require('../mongo-dbo-function')
let ObjectID = require('mongodb').ObjectID
let multer = require('multer')
let fs = require('fs')

let sampleItems = require('../items.js')

router.use(express.static(__dirname + '/images'))

let dbo
setTimeout(() => (dbo = getdbo()), 2000)

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './back/routes/images')
  },
  filename: function (req, file, cb) {
    console.log('filename body', req.body)
    cb(null, Math.floor(Math.random() * 10000000 + 1000000).toString() + '.jpg')
  }
})

let upload = multer({ storage: storage })

/// //////////////////////////////
// router.post("/upload", upload.single("image"), function(req, res, next) {
//   functionList.logEPTrigger(req.originalUrl);
//   console.log("file", req.file);
//   let filename = req.file.filename;
//   console.log("req.body.id", req.body.id);
//   // req.file is the image file
//   // req.body holds text fields
//   res.status(200).json({ success: true });
// });

router.post('/upload', upload.single('image'), function (req, res, next) {
  functionList.logEPTrigger(req.originalUrl)
  console.log('file', req.file)
  let filename = req.file.filename
  console.log('req.body.id', req.body.id)
  // req.file is the image file
  // req.body holds text fields
  let reqBody = req.body

  let sessionId = functionList.stringToNumber(req.cookies.__sid)
  // IMPORTANT: query for cookie must be as number, NOT a string
  dbo
    .collection('sessions')
    .find({ sessionId: sessionId })
    .toArray((err, result) => {
      console.log('sessions', result)
      let username = result[0].username
      console.log('username', username)
      console.log('reqfile', req.file)

      try {
        console.log('reqBody', reqBody)
        let title = reqBody.title
        console.log('title', title)
        let category = reqBody.category
        console.log('category', category)
        let description = reqBody.description
        console.log('description', description)
        let price = reqBody.price
        console.log('price', price)
        let fd = 'http://localhost:4000/items/' + req.file.filename
        console.log('fd', fd)

        let seller = username
        console.log('seller', seller)

        let newObject = { title, category, description, price, fd, seller }
        let reqBodyArr = [title, category, description, price, fd]
        reqBodyArr.every(elem => {
          // console.log("elem",elem)
          // console.log(elem == undefined);
          if (elem === undefined || elem.length === 0) {
            throw `parameter is missing`
          }
          return true
        })


        dbo.collection('items').insertOne(newObject, (err, result) => {
          if (err) throw err
          console.log('insertOne Result', result)
          console.log('success')
          res.status(200).json({ success: true, results: result })
        })
      } catch (e) {
        console.log(e)
        res.status(200).json({ success: false, message: 'parameters missing' })
      }
    })
})

// router.post("/getImage");

router.post('/addItem', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  let reqBody = req.body

  let sessionId = functionList.stringToNumber(req.cookies.__sid)
  // IMPORTANT: query for cookie must be as number, NOT a string
  dbo
    .collection('sessions')
    .find({ sessionId: sessionId })
    .toArray((err, result) => {
      console.log('sessions', result)
      let username = result[0].username
      console.log('username', username)

      try {
        console.log('reqBody', reqBody)
        let title = reqBody.title
        console.log('title', title)
        let category = reqBody.category
        console.log('category', category)
        let description = reqBody.description
        console.log('description', description)
        let price = reqBody.price
        console.log('price', price)
        let fd = reqBody.fd
        console.log('fd', fd)

        let seller = username
        console.log('seller', seller)
        let reqBodyArr = [title, category, description, price, fd]
        reqBodyArr.every(elem => {
          // console.log("elem",elem)
          // console.log(elem == undefined);
          if (elem === undefined || elem.length === 0) {
            throw `parameter is missing`
          }
          return true
        })
      } catch (e) {
        console.log(e)
        res.status(200).json({ success: false, message: 'parameters missing' })
        return
      }

      dbo.collection('items').insertOne(reqBody, (err, result) => {
        if (err) throw err
        console.log(result)
        console.log('success')
        res.status(200).json({ success: true })
      })
    })
})

router.post('/removeItem', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  let reqBody = req.body
  console.log('reqBody', reqBody)
  let itemId = reqBody.itemId
  console.log('itemId', itemId)

  dbo
    .collection('items')
    .deleteOne({ _id: ObjectID(itemId) }, (err, result) => {
      if (err) throw err
      res
        .status(200)
        .json({ success: true, message: 'deleted item with id:' + itemId })
    })
})
// useless endpoint
router.post('/findItemById', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  let id = req.id
  console.log('id', id)
  dbo
    .collection('items')
    .find({})
    .toArray((err, result) => {
      console.log('result', result)
      console.log(result[0]._id.toString())
    })
})

router.get('/getItems', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  dbo
    .collection('items')
    .find({})
    .toArray((err, result) => {
      if (err) throw err
      console.log('result', result)
      res.status(200).json({ results: result, success: true })
    })
})

router.post('/addManyItems', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  // console.log(sampleItems.Items)
  dbo.collection('items').insertMany(sampleItems.Items, (err, result) => {
    console.log('items added')
    res
      .status(200)
      .json({ success: true, message: 'Items added successfully' })
  })
})

// example expected object {"$regex":"cam"}
router.post('/searchItems', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  let queryCriteria = req.body
  console.log('req', req.body)
  console.log('queryCriteria', queryCriteria)
  let regexSearch = new RegExp(queryCriteria.$regex)
  console.log('regexSearch', regexSearch)
  dbo
    .collection('items')
    .find({
      $or: [
        { category: { $regex: regexSearch, $options: 'i' } },
        { description: { $regex: regexSearch, $options: 'i' } },
        // { _id: { $regex: regexSearch, $options: "i" } },
        { title: { $regex: regexSearch, $options: 'i' } }
      ]
    })
    .toArray((err, result) => {
      console.log('result', result)
      console.log('test', result[0]._id)
      res
        .status(200)
        .json({
          result: result,
          success: true,
          message: 'Search completed and found ' + result.length + ' objects'
        })
    })
})

module.exports = router
