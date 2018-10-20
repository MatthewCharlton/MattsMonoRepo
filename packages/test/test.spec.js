const isWebAddress = require('.');

const webbAddress = 'http://test.com';
test(`${webbAddress} is valid`, () => {
  expect(isWebAddress({ value: webbAddress }).isValid).toBe(true);
});
