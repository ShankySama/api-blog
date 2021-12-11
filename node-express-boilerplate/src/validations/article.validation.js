const Joi = require('joi');

const createArticle = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    category: Joi.string().required(),
    comments: Joi.number().required(),
    author: Joi.string().required(),
    content: Joi.string().required()
  }),
};

module.exports = {
  createArticle
};
