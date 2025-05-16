const {MongoClient} = require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017/")
console.log("module and connection success")

try
{
const dataset=client.db("student").collection("details").deleteMany({})
dataset.then((res)=>{
    console.log("success",res)
})
}
catch{
    console.log("error")
}