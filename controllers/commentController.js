const Post = require("../models/postModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");

/***************create comment *******************/

const addComments = async (req, res) => {
  try {
    //getting postid from params

    const { postid } = req.params;

    //getting matching post details from database

    const matchedPost = await Post.findById(postid);

    const userId = req.user.userId;

    const matchedUser = await User.findById(userId);

    //throw error is post not found

    if (!matchedPost) {
      return res.status(404).json({ message: "post not found" });
    }

    //getting comment details from frontend

    const { comment } = req.body;

    //creating new comment

    const newComment = new Comment({
      comment,
      post: matchedPost._id,
      user: userId,
      name: matchedUser.name,
    });

    //saving comments to database

    const savedComment = await newComment.save();

    matchedPost.comments = matchedPost.comments.concat(savedComment._id);

    await matchedPost.save();

    //sending response to frontend

    res.status(201).json({ message: "Comment added Successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

/***************get comment *******************/

const getPostComments = async (req, res) => {
  try {
    //getting post id using params

    const { postid } = req.params;

    //getting matched post comments

    const postComments = await Post.findById(postid).populate("comments");

    //sending response to frontend

    res.status(200).json(postComments.comments);
    //
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

/***************edit comment*******************/

const editComment = async (req, res) => {
  try {
    //getting comment id using params

    const { commentid } = req.params;

    //getting matched post comments

    const matchedComment = await Comment.findById(commentid);

    //throw error if comment not found

    if (!matchedComment) {
      return res.status(404).json({ message: "comment not found" });
    }

    //getting updated comment from frontend

    const { comment } = req.body;

    const userId = req.user.userId;

    //throw error if user not authorized to edit post comment

    if (matchedComment.user != userId) {
      return res
        .status(401)
        .json({ message: "Your are not authorized to edit others comment" });
    }

    //update comment and save

    matchedComment.comment = comment;

    matchedComment.save();

    //sending response to frontend

    res.status(201).json({ message: "Comment updated Successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

/***************edit comment*******************/

const deleteComment = async (req, res) => {
  try {
    //getting comment id using params

    const { commentid } = req.params;

    //getting matched post comments

    const matchedComment = await Comment.findById(commentid);

    //throw error if comment not found

    if (!matchedComment) {
      return res.status(404).json({ message: "comment not found" });
    }

    const userId = req.user.userId;

    //throw error if user not authorized to edit post comment

    if (matchedComment.user != userId) {
      return res
        .status(401)
        .json({ message: "Your are not authorized to edit others comment" });
    }

    //update database

    await Comment.findByIdAndDelete(commentid);

    await Post.findByIdAndUpdate(
      matchedComment.post,
      {
        $pull: { comments: commentid },
      },
      { new: true }
    );

    //sending response text to frontend

    res.status(201).json({ message: "Comment deleted Successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  addComments,
  getPostComments,
  editComment,
  deleteComment,
};
