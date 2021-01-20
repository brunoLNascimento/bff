const pokemon = require('../controllers/pokemon_controller')

module.exports = function(server) {	
    server.get('/find/:pokemon/', pokemon.findPokemon);
}    