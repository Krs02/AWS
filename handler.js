'use strict';

const { getGreeting } = require('./lambda-repo/getGreeting');
const { getGreetingLambdaOnly } = require('./lambda-repo/getGreetingLambdaOnly');

module.exports.getGreeting = async (event) => {
  return getGreeting(event)
};

module.exports.getGreetingLambdaOnly = async (event) => {
  return getGreetingLambdaOnly(event)
};
