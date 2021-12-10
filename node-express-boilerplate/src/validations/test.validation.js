const Joi = require('joi');
const { password } = require('./custom.validation');

const getTest = {
  body: Joi.object().keys({}),
};

const postTest = {
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  };

module.exports = {
    getTest,
    postTest
};
