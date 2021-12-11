const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { articleService } = require('../services');

const createArticle = catchAsync(async (req, res) => {
  const article = await articleService.createArticle(req.body);
  res.status(httpStatus.CREATED).send({ article });
});

const getArticles = catchAsync(async (req, res) => {
  const result = await articleService.queryArticles();
  res.send(result);
});

module.exports = {
  createArticle,
  getArticles
};
