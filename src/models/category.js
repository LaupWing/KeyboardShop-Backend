const mongoose = require('mongoose')

const Category =  mongoose.model('Category',{
    categoryName:{
        type: String,
        requird: true,
        trim:true
    },
    subCategory:{
        type: Array
    }
})

module.exports = Category