const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createArticle = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    category: Joi.string().required(),
    comments: Joi.number().required(),
    author: Joi.string().required(),
    content: Joi.string().required()
  }),
};

const getArticles = {
  query: Joi.object().keys({
    title: Joi.string(),
    category: Joi.string(),
    comments: Joi.string(),
    author: Joi.string(),
    content: Joi.string(),
  }),
}

const getArticle = {
  params: Joi.object().keys({
    articleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createArticle,
  getArticles,
  getArticle
};
