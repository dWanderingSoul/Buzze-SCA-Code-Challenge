// Example in a controller (e.g., src/controllers/postController.js)

const Post = require('../models/Post');

const postController = {
    createPost: async (req, res) => {
        try {
            const { content } = req.body;
            const userId = req.user._id;  // Get the user ID from the authenticated user (you'll need to implement authentication)

            const newPost = new Post({ content, user: userId }); // Associate the post with the user
            const savedPost = await newPost.save();

            res.status(201).json(savedPost);
        } catch (error) {
            console.error("Error creating post:", error);
            res.status(500).json({ error: 'Failed to create post' });
        }
    },

    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find().populate('user').sort({ createdAt: -1 }); // Populate the 'user' field
            res.json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve posts' });
        }
    },
    // ...other controllers
};

module.exports = postController;