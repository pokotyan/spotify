let config = require('../config/pokemon.json');

const convert = (name) => {
  const result = {
    ja: null,
    en: name,
  }

  if (config.filter(pokemon => pokemon.en.toLowerCase() === name)) {
    result.ja = config.filter(pokemon => pokemon.en.toLowerCase() === name)[0].ja
  }
  return result;
}

module.exports = convert;