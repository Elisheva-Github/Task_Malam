const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({

    subject: String,
    name: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('user', userSchema)