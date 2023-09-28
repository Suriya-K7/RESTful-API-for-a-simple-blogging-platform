//setting up Router

const commentRouter = require("express").Router();

//importing required middleware

const { verifyToken } = require("../middlewares/authMiddleware");

//importing required controller

const {
  addComments,
  getPostComments,
  editComment,
  deleteComment,
} = require("../controllers/commentController");

/***********Creating new comment ***********************/

commentRouter.post("/posts/comments/:postid", verifyToken, addComments);

/***********getting post comments***********************/

commentRouter.get("/posts/comments/:postid", getPostComments);

/***********Editing comment ***********************/

commentRouter.patch("/posts/comments/:commentid", verifyToken, editComment);

/***********deleting comment ***********************/

commentRouter.delete("/posts/comments/:commentid", verifyToken, deleteComment);

//exporting router

module.exports = commentRouter;
