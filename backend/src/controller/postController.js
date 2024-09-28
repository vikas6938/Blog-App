// controllers/postController.js

const Post = require('../models/Post');

// Create a new post
const createPost = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }
  
    try {
      const newPost = new Post({ title, content });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      console.error('Error while creating a post:', err.message);
      res.status(500).json({ error: 'Server error' });
    }
  };

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error while fetching posts:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (err) {
    console.error('Error while fetching post by ID:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a post by ID
const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  try {
    const post = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (err) {
    console.error('Error while updating post:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a post by ID
const deletePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('Error while deleting post:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
}
