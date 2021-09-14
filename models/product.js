const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({

    productName: String,
    img: String,
    desc: String,
    price: Number,
})

module.exports = mongoose.model('product', productSchema)