const {MongoClient} = require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017/")

//var input={$set:{mark:100.0}}
var input={$set:{city:"karur"}}
const dataset=client.db("student").collection("detail").updateMany({},input) 

dataset.then((res)=>{
    console.log("response:",res)
}).catch((err)=>{
    console.log("error:",err.toString())
})