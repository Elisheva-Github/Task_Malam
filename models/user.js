const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({


    name: String,
    email: String,
    password: String,
    arrProducts: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'product' }
        }
    ],
})

module.exports = mongoose.model('user', userSchema)