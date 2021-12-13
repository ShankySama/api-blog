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
  const articles = await Article.find({isDeleted:false}).sort({createdAt:-1});
  return articles;
};

/**
 * Query for articlesCategory
 * @returns {Promise<QueryResult>}
 */
 const queryArticlesCategory = async (articleCategory) => {
  const articles = await Article.find({category:articleCategory,isDeleted:false}).sort({createdAt:-1});
  return articles;
};

/**
 * Query for articlesCategory
 * @returns {Promise<QueryResult>}
 */
  const queryArticlesSearched = async (articleSearched) => {
    try {
        let result = [];
        if( articleSearched ) {
          console.warn(articleSearched)
            result = await Article.find( { 
                $and: [{
                    $or: [
                        { 'title': new RegExp(articleSearched, 'i') },
                        { 'category': new RegExp(articleSearched, 'i') },
                        { 'author': new RegExp(articleSearched, 'i') }
                    ],
                }]
            } );
        }
        return result;
    } catch(ex) {            
        throw ex;
    }
};

/**
 * Get article by id
 * @param {ObjectId} id
 * @returns {Promise<Article>}
 */
 const getArticleById = async (id) => {
  return Article.findById(id);
};

/**
 * Update article by id
 * @param {ObjectId} articleId
 * @param {Object} updateBody
 * @returns {Promise<Article>}
 */
 const updateArticleById = async (articleId, updateBody) => {
  const article = await getArticleById(articleId);
  if (!article) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
  }
  Object.assign(article, updateBody);
  await article.save();
  return article;
};

/**
 * Soft delete article by id
 * @param {ObjectId} articleId
 * @returns {Promise<Article>}
 */
 const deleteArticleById = async (articleId) => {
  let article = await getArticleById(articleId);
  if (!article) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
  }
  article = Article.findByIdAndUpdate({_id:articleId},{isDeleted:true},{new:true});
  return article;
};

module.exports = {
  createArticle,
  queryArticles,
  queryArticlesCategory,
  queryArticlesSearched,
  getArticleById,
  updateArticleById,
  deleteArticleById
};
