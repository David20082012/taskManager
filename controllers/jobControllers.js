const mongoose = require('mongoose')
const Job = require('../model/jobModel')

const getJobs = async (req, res)=>{
    try{
       const jobs = await Job.find()
       res.send(jobs)
    }catch(err){
        console.log('err: ' + err)
    }
}

const createJob = async (req, res)=>{
    const job = new Job(req.body)
    try{
       const createdJob = await job.save()
       res.json(createdJob)
    }catch(err){
        console.log('err: ' + err)
    }
}


module.exports = {
    getJobs,
    createJob
}