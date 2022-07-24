require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const todoRoute = require('./backend/routes/todo.js')
//init app
const app= express()

//form data
app.use(express.json())

//cors logging
app.use(cors())

//routes
app.use('/api/todo', todoRoute)

//function to connect to database
const connectDb =() => {
    mongoose.connect(process.env.MONGOURI, (err) => {
        if(err) throw err
        console.log("Mongodb connected...")
    })
}

app.listen(process.env.PORT, (err) => {
    if(err) throw err
    console.log(`Server started on localhost:${process.env.PORT}...`)
    connectDb()
})