let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')
let multer = require('multer')
let cookieParser=require('cookie-parser')


let testRoute = require('./routes/test')
let signupRoute = require('./routes/user')
let itemsRoute = require('./routes/items')
let cartRoute= require('./routes/cart')

let PORT = 4000



app.use(cors({ credentials: true, origin: 'http://localhost:3000' }
))

app.use(cookieParser())

let upload = multer({ dest: 'upload/' })

app.post('/upload', upload.single('image'), function (req, res, next) {
  // functionList.logEPTrigger(req.originalUrl)
  // console.log(req.)
  // console.log("req.body",req.body)
  // req.file is the image file
  // req.body holds text fields
})

app.use(bodyParser.json())

app.use('/test', testRoute)
app.use('/user', signupRoute)
app.use('/items', itemsRoute)
app.use('/cart',cartRoute)

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
