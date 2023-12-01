// product schema
const mongoose = require('mongoose')
const morgan = require('morgan')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    richDescription: {
        type: String,
        default: '',
    },
    countInStock: {
        type: Number,
        required: true,
    },
})

exports.Product = mongoose.model('Product', productSchema)
