const mongoose = require('mongoose')

const Product =  mongoose.model('Product',{
    name:{
        type: String,
        requird: true,
        trim:true
    },
    description:{
        type: String,
        requird: true,
        trim: true,
    },
    thumbnail:{
        type: String,
        required: true,
        trim: true
    },
    imgs:{
        type:Array,
        required: true,
    },
    type:{
        type: String,
        required: true,
        trim: true
    },
    options:{
        type: Array
    }
})

module.exports = Product