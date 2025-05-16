// type 1. blocking or synchronous

var fs=require("fs")
var data=fs.readFileSync("mydata.txt")
console.log(data.toString())
console.log("program end")
