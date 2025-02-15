const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the authentication middleware

// Routes for posts

// Create a new post (protected route - requires authentication)
router.post('/', authMiddleware, postController.createPost); // Use authMiddleware

// Get all posts (public route)
router.get('/', postController.getAllPosts);

// Get a specific post by ID (public route)
router.get('/:id', postController.getPostById);

// Update a post (protected route - requires authentication and ownership)
router.put('/:id', authMiddleware, postController.updatePost); // Requires authentication

// Delete a post (protected route - requires authentication and ownership)
router.delete('/:id', authMiddleware, postController.deletePost); // Requires authentication

// Like/Unlike a post (protected route)
router.post('/:id/like', authMiddleware, postController.likePost);
router.post('/:id/unlike', authMiddleware, postController.unlikePost);


module.exports = router;