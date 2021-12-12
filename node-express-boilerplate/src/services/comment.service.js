
const { Comment } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const createComment = async (commentBody) => {
    return Comment.create(commentBody);
};
const getComment = async (comment) => {
    return Comment.find(comment);
};
const getCommentById = async (id) => {
    return Comment.findById(id);
};
const updateCommentById = async (commentId, updateBody) => {
    const comment = await getCommentById(commentId);
    if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
    }
    Object.assign(comment, updateBody);
    await comment.save();
    return comment;
};
    const deleteCommentById = async (commentId) => {
        let  comment = await getCommentById(commentId);
        // 2 baar declare hora hai comment
        if (!comment) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
            }
        comment= await Comment.findByIdAndUpdate({_id:commentId},
                {isdeleted:true}
            ,{new:true}); 
        return comment;
    };
module.exports = {
    createComment,
    getComment,
    getCommentById,
    updateCommentById,
    deleteCommentById
};
