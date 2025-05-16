const {MongoClient} = require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017/")

//var input={mark:{$gte:40,$lte:100}}
var input={result:/^PASS$/i}
const dataset=client.db("student").collection("detail").find(input).toArray()

dataset.then((res)=>{
    console.log("response:",res)
}).catch((err)=>{
    console.log("error:",err.toString())
})