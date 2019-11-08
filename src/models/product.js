const mongoose = require('mongoose')

const Product =  mongoose.model('Product',{
    name:{
        type: String,
        requird: true,
        trim:true
    },
    price:{
        type: Number,
        required: true
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
    category:{
        type: String,
        required: true,
        trim: true
    },
    subCategory:{
        type: String,
    },  
    options:{
        type: Array
    }
})

module.exports = Product