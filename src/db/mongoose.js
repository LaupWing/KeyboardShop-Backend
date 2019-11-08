const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/keyboard-shop-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})


// const User =  mongoose.model('User',{
//     name:{
//         type: String,
//         requird: true,
//         trim:true
//     },
//     age:{
//         type: Number,
//         required: true,
//         default: 0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Fellow human your age must be a positive number bleep')
//             }
//         }
//     },
//     email:{
//         type: String,
//         requird: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Bleep you must enter a valid email bl33p')
//             }
//         }
//     }
// })

// const user = new User({
//     name: 'test',
//     age: 27,
//     email: 'loc@hotmail.com'
// })

// user.save().then(()=>{
//     console.log('succes----------------------------------------------------------------------------------')
// }).catch(e=>console.log( 'wahed--------------------------------------------------------------------------', e))