const express = require('express')
const router = express.Router()
const { Product } = require('../models/product')
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

module.exports = router
