const express = require('express')
const router = express.Router()
const jobControllers = require('../controllers/jobControllers')

router.get('/', jobControllers.getJobs)
router.post('/create', jobControllers.createJob)

module.exports = router;