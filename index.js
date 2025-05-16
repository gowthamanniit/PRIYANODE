var http=require("http")
const PORT=process.env.PORT || 9012
const app=http.createServer(function(req,res){
        res.end("<h1>Welcom to node js local to live</h1>")
})
app.listen(PORT,()=>{
console.log(`port listening at ............ ${PORT}`)
})






