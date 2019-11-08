const express = require('express')
const router = new express.Router()

router
    .get('/products', (req,res)=>{
        res.send('product page')
    })

module.exports = router