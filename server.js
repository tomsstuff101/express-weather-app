// setup
const express = require('express')
const path = require('path')
const {main} = require('./lib/app')


const app = express()

// public static directory
// serve via 'use' a static 
app.use(express.static(path.join(__dirname, "public")))


// app.get('weather ...)
app.get('/weather' , (req,res) =>{
res.send('weather')
console.log(`req.query  ${req.query.name}`)
const str = req.query.name
console.log(`sdlgfds  ${str}`)
})


app.listen(3001, ()=>{
    console.log('listen to 3001')
})

