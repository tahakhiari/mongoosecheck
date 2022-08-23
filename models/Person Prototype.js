const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: number },
    
    favoriteFoods: [{ type: String }]
})



module.exports = Person = mongoose.model("person", personSchema)