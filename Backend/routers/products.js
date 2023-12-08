const express = require('express')
const router = express.Router()
const { Product } = require('../models/product')
const multer = require('multer')
const Grid = require('gridfs-stream')
const mongoose = require('mongoose')
const conn = mongoose.connection

// Initialize GridFS
Grid.mongo = mongoose.mongo
let gfs

conn.once('open', () => {
    gfs = Grid(conn.db)
})

// Multer configuration
const storage = multer.memoryStorage() // Store images in memory as buffers
const upload = multer({ storage: storage })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/') // Set the destination folder for uploads
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname) // Set unique filenames
//     },
// })

// const upload = multer({ storage: storage })

router.get('/', async (req, res) => {
    const productlist = await Product.find()

    if (!productlist) {
        res.status(500).json({ success: false })
    }
    res.send(productlist)
})

router.post('/', (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock,
        cost: req.body.cost,
        rating: req.body.rating,
        category: req.body.category,
        richDescription: req.body.richDescription,
        dateCreated: req.body.dateCreated,
    })

    console.log('name', req.body.name)
    product
        .save()
        .then((createdProduct) => {
            res.status(201).json(createdProduct)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false,
            })
        })
})

// Upload route for product with image
// router.post('/', upload.single('image'), async (req, res) => {
//     try {
//         const { name, richDescription, countInStock, cost, rating, category } =
//             req.body
//         const { originalname, buffer, mimetype } = req.file

//         const newProduct = new Product({
//             name,
//             richDescription,
//             countInStock,
//             cost,
//             rating,
//             category,
//             image: {
//                 filename: originalname,
//                 data: buffer,
//                 contentType: mimetype,
//             },
//         })

//         const savedProduct = await newProduct.save()
//         res.json(savedProduct)
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// })

module.exports = router
