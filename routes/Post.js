const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  allPosts,
  getPost,
  deletePost,
} = require("../controllers/postCtr");

const { requireSignIn, alowedTo } = require("../middlwares/authMiddlwares");

const {
  createPostValidator,
  removePostValidator,
  updatePostValidator,
  getPostValidator,
} = require("../utils/validators/postValidator");

// @Desc Create Post
// @Access Private
router.post(
  "/",
  requireSignIn,
  alowedTo("admin"),
  createPostValidator,
  createPost
);

// @desc Update Post
router.put(
  "/:id",
  requireSignIn,
  alowedTo("admin"),
  updatePostValidator,
  updatePost
);

// @desc get all Post
router.get("/", allPosts);

// @desc get a single Post
router.get("/:id", getPostValidator, getPost);

// @desc Delete a Post
router.delete(
  "/:id",
  requireSignIn,
  alowedTo("admin"),
  removePostValidator,
  deletePost
);

module.exports = router;
