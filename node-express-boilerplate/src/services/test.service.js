const httpStatus = require('http-status');
const { Test } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createTest = async (body) => {
  return Test.create(body);
};

module.exports = {
  createTest,
};
