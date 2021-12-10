const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { testService } = require('../services');

const getTest = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send({
      msg: 'Working getTest'
  });
});

const postTest = catchAsync(async (req, res) => {
    console.log('req.body', req.body);
    // let test = testService.createTest( req.body );
    res.status(httpStatus.CREATED).send({
        msg: 'Working postTest',
        body: req.body
    });
  });

module.exports = {
  getTest,
  postTest
};
