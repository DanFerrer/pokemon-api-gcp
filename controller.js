const pokedex = require('./pokedex.json');
const { ErrorHandler } = require('./utils/error');
  
async function getPokemonById(req, res, next) {
  const { id } = req.params;

  try {
    const pokemon = pokedex.find((pokemon) => pokemon.id === parseInt(id));

    if (pokemon) {
      return res.status(200).json(pokemon);
    } else {
      throw new ErrorHandler(404, 'Pokemon not found');
    }
  } catch(err) {
    next(err);
  }
};

module.exports = {
  getPokemonById
};