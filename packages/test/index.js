const ValidateBase = require('matts-sick-validation-func-mono-repo')
  .ValidateBase;

const isWebAddress = ({ value, min = 0, max = '', message } = {}) =>
  new ValidateBase().matches({
    regex: `^((https?):\/\/)?(www.)?([a-z0-9]+\.[a-z]{2,}\.[a-z]{2,})(\/[a-zA-Z0-9.#]+\/?){${min},${max}}$`,
    message,
    value
  });

module.exports = isWebAddress;
