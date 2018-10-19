const validate = require('../Validate').default;

module.exports = validate.test('Test').isAlphabet().isValid;
