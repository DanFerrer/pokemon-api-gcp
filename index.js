const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 8000;

const { getPokemonById } = require('./controller');
const { handleError } = require('./utils/error');

app.get('/pokedex/:id', getPokemonById);

app.use(handleError);

app.listen(PORT, () => console.log(`Pokedex listening at port ${PORT}`));

module.exports = app;
