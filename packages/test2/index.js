const isWebAddress = require('../test');

const webAddress = 'http://test.com';

console.log(
  webAddress +
    ' is a valid web address: ' +
    isWebAddress({ value: webAddress }).isValid
);

const invalidWebAddress = 'http://blah.c';

console.log(
  invalidWebAddress +
    ' is not a valid web address: ' +
    isWebAddress({ value: invalidWebAddress, message: 'Not valid' }).messages
);
