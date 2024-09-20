const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

// Route to create a new post
router.post('/', protect, createPost);

// Route to get all posts
router.get('/', getAllPosts);

// Route to get a post by ID
router.get('/:id', getPostById);

// Route to update a post by ID
router.put('/:id', protect, updatePost);

// Route to delete a post by ID
router.delete('/:id', protect, deletePost);

module.exports = router;
