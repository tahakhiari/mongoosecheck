const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log("DB connected succesfully")
    } catch (error) {
        console.log("DB connection failed", error)
    }
}

module.exports = connectDB