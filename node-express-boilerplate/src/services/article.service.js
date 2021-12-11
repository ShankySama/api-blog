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

module.exports = {
  createArticle
};
