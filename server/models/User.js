const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    userID: {type: String, required: true},
    firstName: {type: String, required: true},
    middleName: String,
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', userSchema)

module.exports = User;