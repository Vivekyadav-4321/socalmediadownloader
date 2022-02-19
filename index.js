const express = require("express")
const app = express()
const portnumber = 5000 || process.env.PORT

app.get("/home",(req, res)=>{
res.end("hi");
})

app.listen(portnumber,()=>{console.log(portnumber);})