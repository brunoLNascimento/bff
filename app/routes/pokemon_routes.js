const pokemon = require('../controllers/pokemon_controller')

module.exports = function(server) {	
    server.get('/findBy/:pokemon', pokemon.findByPokemon);
    server.get('/find/:page?', pokemon.findAllPokemon);
}    