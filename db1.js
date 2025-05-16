const {MongoClient} = require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017/")
console.log("module and connection success")
var input=[
    {
        rno:1004,
        sname:"test",
        mark:91.8
    },
    {
        rno:1005,
        sname:"NTH",
        mark:95.8
    },
    {
        rno:1006,
        sname:"nabu",
        mark:65.8
    }
]

try
{
const dataset=client.db("student").collection("details").insertMany(input)
dataset.then((res)=>{
    console.log("success",res)
})
}
catch{
    console.log("error")
}