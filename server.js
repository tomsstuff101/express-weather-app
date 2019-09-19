// setup
const express = require('express')
const path = require('path')
const {main} = require('./lib/app')


const app = express()

// public static directory
// serve via 'use' a static 
app.use(express.static(path.join(__dirname, "public")))


// make sure you await for the info from the api's 
// before sending the data to the client
app.get ('/weather' , async (req,res) =>{

    let data = await main(req.query.location)
    res.send(data)
})


app.listen(3001, ()=>{
    console.log('listen to 3001')
})

