const { urlBy, timeout} = require('../config/url_config')
const { genericGet } = require('./service')


module.exports = {
    async find(pokemon){
        try {
            let foundPokemonDB = await findPokemonDB(pokemon);
            if (foundPokemonDB) return foundPokemonDB;
            
            let foundPokemonApi = await findPokemonApi(pokemon);
            let foundCollor = await findCollorPokemon(foundPokemonApi);
            return foundCollor;
        } catch (error) {
            throw error;
        };
    }
};

async function findPokemonApi(pokemon){
    try {
        let url = urlBy.findPokemon + pokemon;
        let found = await genericGet(url, timeout.time);
        return found;
    } catch (error) {
        throw error
    };
};

async function findPokemonDB(pokemon){
    try {
        let url = urlBy.apiCollor + pokemon;
        let foundPokemonDB = await genericGet(url, timeout.time);
        if(foundPokemonDB) 
            return foundPokemonDB;
        else
            return false;//false tem que sair, acho que dá pra deixar apenas o foundPokemonDB
    } catch (error) {
        console.log("Erro ao consultar banco de dados: " + error);
    };
};

async function findCollorPokemon(pokemon){ //deverá encaminhar o id e nome do pokemon, para salvar no base
    try {
        let url = urlBy.getCollor + pokemon;
        let foundPokemonDB = await genericGet(url, timeout.time);
        if(foundPokemonDB) 
            return foundPokemonDB;
        else
            return false;//false tem que sair, acho que dá pra deixar apenas o foundPokemonDB
    } catch (error) {
        console.log("Erro ao consultar banco de dados: " + error);
    };
};
