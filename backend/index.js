const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true }
);
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("mongodb successfully connected")
})

const userRoute = require('./routes/user.route')
const projectRoute = require('./routes/project.route')

app.use('/user', userRoute)
app.use('/project', projectRoute)


app.listen(port, ()=>{
    console.log('server running on port :'+port)
})