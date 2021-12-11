const httpStatus = require('http-status');
const { Article } = require('../models');

/**
 * Create a article
 * @param {Object} articleBody
 * @returns {Promise<Article>}
 */
const createArticle = async (articleBody) => {
  return Article.create(articleBody);
};

const queryArticles = async () => {
  const articles = await Article.find().sort({createdAt:-1});
  return articles;
};

module.exports = {
  createArticle,
  queryArticles
};
