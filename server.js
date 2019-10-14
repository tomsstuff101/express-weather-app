// setup
const express = require('express')
const path = require('path')
// const {main} = require('./lib/app')
const hbs = require("express-handlebars")
const bodyParse = require("body-parser")

const port = process.env.PORT || 3001

const routes = require("./routes/index")

const app = express()

// public static directory
// serve via 'use' a static 
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ encoded: false }))
app.use(bodyParser.json())


app.engine(
    ".hbs",
    hbs({
        defaultLayout: "layout",
        extname: ".hbs"
    })
)

app.set("view engine", ".hbs")

app.use("/", routes)

// // make sure you await for the info from the api's 
// // before sending the data to the client
// app.get ('/weather' , async (req,res) =>{

//     let data = await main(req.query.location)
//     res.send(data)
// })


app.listen(port, ()=>{
    console.log(`listen to ${port}`)
})

