const express = require("express")
const app = express()
const portnumber = 5000 || process.env.PORT

app.get("/",(req, res)=>{
res.end("hi");
})

app.listen(portnumber,()=>{console.log("sever is live");})