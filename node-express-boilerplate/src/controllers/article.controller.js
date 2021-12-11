const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { articleService } = require('../services');

const createArticle = catchAsync(async (req, res) => {
  const article = await articleService.createArticle(req.body);
  res.status(httpStatus.CREATED).send({ article });
});

module.exports = {
  createArticle
};
