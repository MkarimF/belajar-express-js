const express =require('express')

const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController.js');

const postRoutes = express.Router();

postRoutes.get("/posts", getPosts);
postRoutes.post("/posts", createPost);
postRoutes.put("/posts/:id", updatePost);
postRoutes.delete("/posts/:id", deletePost);
module.exports = postRoutes;
// This code sets up a route for handling GET requests to "/api/posts".
