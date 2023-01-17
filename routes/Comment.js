const express = require("express");
const router = express.Router();

const {
  createComment,
  updateComment,
  getComment,
  allComments,
} = require("../controllers/commentCtr");

const {
  createCommentValidator,
  updateCommentValidator,
  getCommentValidator,
} = require("../utils/validators/commentValidator");

const { requireSignIn, alowedTo } = require("../middlwares/authMiddlwares");

// @desc create comment
// @access protect
router.post(
  "/",
  requireSignIn,
  alowedTo("user", "admin"),
  createCommentValidator,
  createComment
);

// @desc update comment
// @access protect
router.put(
  "/:id",
  requireSignIn,
  alowedTo("user", "admin"),
  updateCommentValidator,
  updateComment
);

// @desc get a single comment
router.get("/:id", getCommentValidator, getComment);

// @desc get all comment
router.get("/", allComments);

module.exports = router;
