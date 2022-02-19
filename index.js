const express = require("express")
const app = express()
const PORT = 5000 || process.env.PORT

app.get("/",(req, res)=>{

res.render("index.hbs")

})

app.listen(PORT,()=>{console.log("sever is live");})