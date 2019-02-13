let express = require('express')
let router = express.Router()
let functionList = require('../functions')
let getdbo = require('../mongo-dbo-function')
let ObjectID = require('mongodb').ObjectID
let multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './back/aaa')
  },
  filename: function (req, file, cb) {
    console.log("filename body",(req.body))
    cb(null, req.body.id + '.jpg')
  }
})

let upload = multer({ storage: storage })

router.post('/upload', upload.single('image'), function (req, res, next) {
  functionList.logEPTrigger(req.originalUrl)
  console.log('file', req.file)
  let filename = req.file.filename
  console.log('req.body.id', req.body.id)
  // req.file is the image file
  // req.body holds text fields
  res.status(200).json({ success: true })
})

let dbo
setTimeout(() => (dbo = getdbo()), 2000)

router.post('/addItem', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  let reqBody = req.body

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
    let likes = reqBody.likes
    console.log('likes', likes)
    let seller = reqBody.seller
    console.log('seller', seller)
    let reqBodyArr = [title, category, description, price, fd, likes, seller]
    reqBodyArr.every(elem => {
      // console.log("elem",elem)
      // console.log(elem == undefined);
      if (elem === undefined || elem.length === 0) {
        throw (`parameter is missing`)
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

router.post('/removeItem', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  let reqBody = req.body
  console.log('reqBody', reqBody)
  let itemId = reqBody.itemId
  console.log('itemId', itemId)

  dbo.collection('items').deleteOne({ _id: ObjectID(itemId) }, (err, result) => {
    if (err) throw err
    res.status(200).json({ success: true, message: 'deleted item with id:' + itemId })
  })
})
// useless endpoint
router.post('/findItemById', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  let id = req.id
  console.log('id', id)
  dbo.collection('items').find({}).toArray((err, result) => {
    console.log('result', result)
    console.log(result[0]._id.toString())
  })
})

router.get('/getItems', (req, res) => {
  functionList.logEPTrigger(req.originalUrl)
  dbo.collection('items').find({}).toArray((err, result) => {
    if (err) throw err
    console.log('result', result)
    res.status(200).json({ results: result, success: true })
  })
})

module.exports = router
