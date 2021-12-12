const express = require('express');
const validate = require('../../middlewares/validate');
const commentValidation = require('../../validations/comment.validation');
const commentController=require('../../controllers/comment.controller')
const router = express.Router();
    // .route('/')

    // comment POST route
    router.post('/comments', validate(commentValidation.postComment),commentController.postCommentt)
    // comment GET route
    router.get('/comments', validate(commentValidation.getAllComments),commentController.getComments)
    // comment GET BY ID route
    router.get('/:commentId', validate(commentValidation.getComment),commentController.getComment)
    // Update comment  route
    router.patch('/update/:commentId', validate(commentValidation.updateComment), commentController.updateComment)
    // Delete request
    router.patch('/delete/:commentId', validate(commentValidation.deleteComment), commentController.deleteComment);
    module.exports = router;


