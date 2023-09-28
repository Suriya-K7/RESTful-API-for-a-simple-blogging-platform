const Post = require("../models/postModel");
const User = require("../models/userModel");

/***************create new post *******************/

const createPost = async (req, res) => {
  try {
    // getting all post

    const { userId, description } = req.body;

    //throw error is if token invalid

    if (req.user.userId !== userId) {
      return res
        .status(401)
        .json({ message: "session timeout, please login again to post" });
    }

    //find user

    const user = await User.findById(userId);

    //create new post and save in database

    const newPost = new Post({
      userId,
      name: user.name,
      description,
      comments: [],
    });

    await newPost.save();

    const post = await Post.find();

    // sending all post to front end

    res.status(201).json({ post, message: "Posted Successfully" });
    //
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

/***************read post data*******************/

const getAllPosts = async (req, res) => {
  try {
    // getting all post

    const post = await Post.find();

    // sending all post to front end

    res.status(200).json(post);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

/***************edit post data*******************/

const editPost = async (req, res) => {
  try {
    //getting post id using params

    const { postid } = req.params;

    //getting matched post

    const matchedPost = await Post.findById(postid);

    //throw error if post not found

    if (!matchedPost) {
      return res.status(404).json({ message: "post not found" });
    }

    const { description } = req.body;

    const userId = req.user.userId;

    //throw error if user is not authorized

    if (matchedPost.userId !== userId) {
      return res
        .status(401)
        .json({ message: "Your are not authorized to edit others post" });
    }

    //updating post and save in database

    matchedPost.description = description;

    matchedPost.save();

    //sending response to frontend

    res
      .status(201)
      .json({ updatedPost: matchedPost, message: "Post updated Successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

/***************delete post data*******************/

const deletePost = async (req, res) => {
  try {
    //getting post id using params

    const { postid } = req.params;

    //getting matched post

    const matchedPost = await Post.findById(postid);

    //throw error if post not found

    if (!matchedPost) {
      return res.status(404).json({ message: "post not found" });
    }

    const userId = req.user.userId;

    //throw error if user is not authorized

    if (matchedPost.userId !== userId) {
      return res
        .status(401)
        .json({ message: "Your are not authorized to delete others post" });
    }

    //deleting post in database

    await Post.findByIdAndDelete(postid);

    //sending response to frontend

    res.status(201).json({ message: "Post deleted Successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  editPost,
  deletePost,
};
