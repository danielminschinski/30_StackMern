const express = require('express');

const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

// get random post
router.route('/posts/random').get(PostController.getRandomPost);

// get one post
router.route('/posts/:id').get(PostController.getPost);

// add posts
router.route('/posts').post(PostController.addPost);

// edit posts
router.route('/posts/:id').put(PostController.editPost);

module.exports = router;