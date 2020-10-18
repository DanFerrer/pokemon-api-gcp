const pokedex = require('./pokedex.json');
const { ErrorHandler } = require('./utils/error');
  
function getPokemonById(req, res, next) {
  const { id } = req.params;
  const pokemon = pokedex.find((pokemon) => pokemon.id === parseInt(id));

    if (pokemon) {
      return res.status(200).send(pokemon);
    } else {
     next(new ErrorHandler(404, 'Pokemon not found'));
    }
};

module.exports = {
  getPokemonById
};