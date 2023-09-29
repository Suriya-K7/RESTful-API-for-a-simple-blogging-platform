//setting up Router

const postRouter = require("express").Router();

//importing required middleware

const { verifyToken } = require("../middlewares/authMiddleware");

//importing required controller

const {
  createPost,
  getAllPosts,
  editPost,
  deletePost,
  getOnePost,
} = require("../controllers/postController");

/***********Creating new post ***********************/

postRouter.post("/posts", verifyToken, createPost);

/***********getting all post ************************/

postRouter.get("/posts", verifyToken, getAllPosts);

/***********getting one post ************************/

postRouter.get("/posts/:postid", verifyToken, getOnePost);

/***********editing user post ************************/

postRouter.patch("/posts/:postid", verifyToken, editPost);

/***********deleting user post ************************/

postRouter.delete("/posts/:postid", verifyToken, deletePost);

//exporting router

module.exports = postRouter;
