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
    .patch('/user/:id', async (req,res)=>{
        try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true})
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        }
        catch(e){
            res.status(400).send(e)
        }
    })
module.exports = router