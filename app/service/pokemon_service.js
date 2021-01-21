const { urlBy, timeout} = require('../config/url_config')
const { genericGet, genericPost } = require('./service')


module.exports = {
    async find(pokemon){
        try {
            let foundPokemonDB = await findPokemonDB(pokemon);
            if (foundPokemonDB.length) return foundPokemonDB;
            
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
        let type = [];
        found.types.forEach(element => {
            let types ={
                name: element.type.name,
                color:""
            }  


            type.push(types)
        });
        let param = { 
            name: found.name,
            id: found.id,
            type: type
        }
        return param;
    } catch (error) {
        throw error
    };
};

async function findPokemonDB(pokemon){
    try {
        let url = urlBy.apiCollor + pokemon;
        let found =await genericGet(url, timeout.time);
        if (found.length) 
            return found;
        else
            return false;
    } catch (error) {
        console.log("Erro ao consultar banco de dados: " + error);
    };
};

async function findCollorPokemon(body){
    try {
        let url = urlBy.getCollor;
        let foundPokemonDB = await genericPost(url, body, timeout.time);
        if(foundPokemonDB) 
            return foundPokemonDB;
        else
            return false;
    } catch (error) {
        console.log("Erro ao consultar banco de dados: " + error);
    };
};
