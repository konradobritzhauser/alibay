let MongoClient = require("mongodb").MongoClient;

let dbUsername = "admin";
let dbPassword = "admin123";
let url = `mongodb://${dbUsername}:${dbPassword}@ds131905.mlab.com:31905/alibay`;





// let gdbo=function(){
//     MongoClient.connect(url, { useNewUrlParse: true }, (err, db) => {
//         console.log("connected to database")
//         if (err) reject(err);
//         return db.db('alibay');
//       });
// }

let dbo;
MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
    if(err) throw err
    dbo=db.db('alibay')
})
let getdbo=()=>dbo
// let gdbo=function(){MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
//     console.log("connected to database")
//     if(err) throw (err);
//     console.log("db.db(alibay)",db.db('alibay'))
//     return db.db('alibay')
//     // gdbo=db.db('alibay')
//     // gdbo.collection('test').findOne({},(err,result)=>{
    //     console.log(result)
    // })
// })
// }
// setTimeout(()=>{console.log(dbo)},2000)




module.exports = getdbo;
