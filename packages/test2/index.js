const isWebAddress = require('../test');

const webbAddress = 'http://test.com';
console.log(
  webbAddress +
    ' is a valid web address: ' +
    isWebAddress({ value: webbAddress }).isValid
);
