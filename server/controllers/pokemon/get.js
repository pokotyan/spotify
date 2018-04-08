const rp = require('request-promise');
const pokemonNameConvert = require('../../utils/pokemon-name-convert');

module.exports = async (req, res, next) => {
  const result = await rp({
    method: 'GET',
    uri: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (721 - 1 + 1) + 1)}/`,
    json: true,
  });
  result.jaName = pokemonNameConvert(result.name).ja && pokemonNameConvert(result.name).ja;
  result.gif = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${result.name}.gif`;
  res.send(result);
  next();
};
