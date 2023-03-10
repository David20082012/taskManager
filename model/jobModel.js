const mongoose = require('mongoose')


const jobSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required:true
    }

})

module.exports = mongoose.model("Job", jobSchema)