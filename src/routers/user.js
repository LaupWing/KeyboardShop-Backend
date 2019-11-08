const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router
    .get('/user', (req,res)=>{
        res.send('user page')
    })
    .post('/user', async (req,res)=>{
        const user = new User(req.body)
        try{
            await user.save()
            res.status(200).send(req.body)
        }catch(e){
            res.send(e)
        }
    })
    .patch('/user/:id')
module.exports = router