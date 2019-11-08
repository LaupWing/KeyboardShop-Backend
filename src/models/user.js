const mongoose = require('mongoose')
const validator = require('validator')

const User =  mongoose.model('User',{
    name:{
        type: String,
        requird: true,
        trim:true
    },
    age:{
        type: Number,
        required: true,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Fellow human your age must be a positive number bleep')
            }
        }
    },
    email:{
        type: String,
        requird: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Bleep you must enter a valid email bl33p')
            }
        }
    }
})

module.exports = User