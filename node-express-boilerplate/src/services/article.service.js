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

/**
 * Query for articles
 * @returns {Promise<QueryResult>}
 */
const queryArticles = async () => {
  const articles = await Article.find().sort({createdAt:-1});
  return articles;
};

/**
 * Get article by id
 * @param {ObjectId} id
 * @returns {Promise<Article>}
 */
 const getArticleById = async (id) => {
  return Article.findById(id);
};

module.exports = {
  createArticle,
  queryArticles,
  getArticleById
};
