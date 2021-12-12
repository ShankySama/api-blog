    const Joi = require('joi');
    const { objectId } = require('./custom.validation');

    const postComment = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        message: Joi.string().required(),
    }),
    };
    const getAllComments = {
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            message: Joi.string().required(),
        
        };

        const getComment = {
            params: Joi.object().keys({
            commentId: Joi.string().custom(objectId),
            }),
        };

        
const updateComment = {
    params: Joi.object().keys({
        commentId: Joi.required().custom(objectId),
        }),
        body: Joi.object()
        .keys({
            name: Joi.string(),
            email: Joi.string().email(),
            message: Joi.string(),
        })
        .min(1),
    };
    
    const deleteComment= {
        params: Joi.object().keys({
        commentId: Joi.string().custom(objectId),
        }),
    };


    module.exports = {
    postComment,
    getAllComments,
    getComment,
    updateComment,
    deleteComment
    };
