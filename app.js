const express = require('express')
const app = express();
require('dotenv/config')

const postRouters = require('./routes/postRoutes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://davidwageehReyad:EazAzCJnG0IAm6hi@cluster0.sj80kpr.mongodb.net/?retryWrites=true&w=majority')
.then(()=>[
    console.log('databaase is connected')
]).catch((err)=>{
    console.log('err')
})

app.use(bodyParser.json())

app.use('/posts', postRouters)



app.listen(process.env.PORT, ()=>{
    console.log('Server is running')
})



