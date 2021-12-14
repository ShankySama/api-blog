const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentService } = require('../services');
const ApiError = require('../utils/ApiError');

const postCommentt = catchAsync(async (req, res) => {
  // console.log("error",req.body);
    const comment = await commentService.createComment(req.body);
    res.status(httpStatus.CREATED).send(comment);
});

const getComments = catchAsync(async (req, res) => {
    const comments = await commentService.getComment();
    res.status(httpStatus.OK).send(comments);
});

const getComment = catchAsync(async (req, res) => {
  const comment = await commentService.getCommentById(req.params.commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(comment);
});

const updateComment = catchAsync(async (req, res) => {
  const comment = await commentService.updateCommentById(req.params.commentId, req.body);
  res.send(comment);
});
const deleteComment = catchAsync(async (req, res) => {
  await commentService.deleteCommentById(req.params.commentId);
  res.send(" Comment Deleted Successfully ");
});

module.exports = {
  postCommentt,
  getComments,
  getComment,
  updateComment,
  deleteComment
};
