import { json } from 'express'
import { findById } from '../models/Person Prototype'

const Person = require('../models/Person Prototype')

export const createPerson = () => {
    Person.create({ name: "taha", age: 95, favoriteFoods: "pizza" }, { name: "john", age: 22, favoriteFoods: "makloub" })
}


export const findPerson = () => {
    Person.find()
}

export const findPersonByID = (personId) => {
    Person.findById(personId)
}

export const findOne = (food) => {
    Person.find({ favoriteFoods: food })
}

export const findPersonByIdThenUpdate = (personId) => {

    const person = findById(personId)
    if (person) {
        person.favoriteFoods.push("hamburger")
    }
    person.save()

}
export const findPersonAndUpdate = (personName) => {
    Person.findOneAndUpdate({ name: personName }, { $set: { age: 20 } }, { new: true })
}

export const findPersonByIdAndRemove = (personId) => {
    Person.findByIdAndRemove(personId)
}

export const personRemoveMany = () => {
    Person.remove({ name: "mary" }).then(json("Successfully deleted!")).catch(err => json(err))
}