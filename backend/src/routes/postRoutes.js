const express = require('express');  // Import express first
const router = express.Router();  
const {createPost, getAllPosts, getPostById, updatePostById, deletePostById} = require('../controller/postController');


// Routes for post management
router.post('/posts', createPost);
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', updatePostById);
router.delete('/posts/:id', deletePostById);

module.exports = router;
