const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { articleService } = require('../services');

const createArticle = catchAsync(async (req, res) => {
  const article = await articleService.createArticle(req.body);
  res.status(httpStatus.CREATED).send({ article });
});

const getArticles = catchAsync(async (req, res) => {
  const result = await articleService.queryArticles();
  res.send(result);
});

const getArticlesSearched = catchAsync(async (req, res) => {
  const result = await articleService.queryArticlesSearched(req.params.search);
  res.send(result);
});

const getArticlesCategory = catchAsync(async (req, res) => {
  const result = await articleService.queryArticlesCategory(req.params.articleCategory);
  res.send(result);
});

const getArticle = catchAsync(async (req, res) => {
  const article = await articleService.getArticleById(req.params.articleId);
  if (!article) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
  }
  res.send(article);
});

const updateArticle = catchAsync(async (req, res) => {
  const article = await articleService.updateArticleById(req.params.articleId, req.body);
  res.send(article);
});

const deleteArticle = catchAsync(async (req, res) => {
  await articleService.deleteArticleById(req.params.articleId);
  res.send('Deleted');
});

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  getArticlesCategory,
  getArticlesSearched,
  updateArticle,
  deleteArticle
};
