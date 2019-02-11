let express=require('express')
let app=express()
let bodyParser=require('body-parser')
let cors=require('cors')

let testRoute=require('./routes/test')
let signupRoute=require('./routes/user')

let PORT=4000

app.use(cors())

app.use(bodyParser.json())

app.use('/test',testRoute)
app.use('/user',signupRoute)

app.listen(PORT,()=>{
    console.log("listening on port",PORT)
})


