const express = require('express')
const router = new express.Router()
const Product = require('../models/product')

router
    .get('/products', (req,res)=>{
        res.send('product page')
    })
    .get('/products/:id', (req,res)=>{
        res.send('product page')
    })
    .post('/products', async (req,res)=>{
        const product = new Product(req.body)
        try{
            await product.save()
            res.status(201).send('Product succesfully added')
        }catch(e){
            res.send(e)
        }
    })

module.exports = router