const express = require('express')
const app = express();
require('dotenv/config')
const postRouters = require('./routes/postRoutes')
const jobRouters = require('./routes/jobRoutes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('Server is running & Database is connected')
    });
}).catch((err)=>{
    console.log(err)
})


// useing middlware to get the data in json format
app.use(bodyParser.json())


//Routes
app.use('/posts', postRouters)
app.use('/jobs', jobRouters)









