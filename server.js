require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || process.env.port
const connectDB = require('./config/connectDB')
app.use(express.json())
connectDB()



app.listen(PORT, err => {
    err ? console.log('Server connection failed', err)
        : console.log(`The server is running on port ${PORT}`)
})