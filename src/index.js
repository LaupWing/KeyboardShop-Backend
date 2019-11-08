const express = require('express')
const app = express()
require('./db/mongoose')
const port = process.env.PORT
const productRoute = require('./routers/products')
const userRoute = require('./routers/user')

app
    .use(express.json())
    .use(productRoute)
    .use(userRoute)
    .listen(port,()=> console.log(`App is listening to port ${port}`))