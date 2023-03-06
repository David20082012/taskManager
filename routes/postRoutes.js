const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers')

router.get('/', postControllers.getPosts)
router.post('/create', postControllers.postPosts)

module.exports = router;