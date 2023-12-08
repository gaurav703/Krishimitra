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
    cost: {
        type: Number,
        default: 0,
        required: true,
    },
    rating: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
        default: '',
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    file: {
        filename: String,
        data: Buffer,
        contentType: String,
    },
})

exports.Product = mongoose.model('Product', productSchema)
