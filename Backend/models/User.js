const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userid: Number,
    email: String,
    password: String,
    Name: String
})

module.exports = mongoose.model('User', userSchema)