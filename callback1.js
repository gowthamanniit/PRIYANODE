// type 2 asynchronous or non block or callback
var fs=require("fs")
fs.readFile("priya.txt",(err,res)=>{
    if (err)
    {
        console.log("Error : ",err.toString())
    }
    else{
        console.log(res.toString())
    }

})
console.log("program end")
