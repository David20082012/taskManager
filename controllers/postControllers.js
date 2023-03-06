const mongoose = require('mongoose')
const Post = require('../model/postModel')

const getPosts = async (req, res)=>{
    try{
       const posts = await Post.find()
       res.send(posts)
    }catch(err){
        console.log('err: ' + err)
    }
}

const postPosts = async (req, res)=>{
    const post = new Post(req.body)
    try{
       const savePost = await post.save()
       res.json(savePost)
    }catch(err){
        console.log('err: ' + err)
    }
}


module.exports = {
    getPosts,
    postPosts
}