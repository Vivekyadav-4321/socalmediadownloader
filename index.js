const express = require("express")
const app = express()
const portnumber = process.env.PORT || 5000

app.get("/home",(req, res)=>{
res.end("hi");
})

app.listen(portnumber,()=>{console.log(portnumber);})