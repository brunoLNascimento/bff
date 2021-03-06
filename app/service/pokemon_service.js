const { urlBy, timeout} = require('../config/url_config')
const { genericGet, genericPost } = require('./service')


module.exports = {
    async findBy(pokemon){
        try {
            let foundPokemonDB = await findPokemonDB(pokemon);
            if (foundPokemonDB.length) return foundPokemonDB;
            
            let foundPokemonApi = await findPokemonApi(pokemon);
            let foundCollor = await findCollorPokemon(foundPokemonApi);
            return foundCollor;
        } catch (error) {
            throw error;
        };
    },

    async find(page){
        try {
            return await findAllPokemonDB(page);
        } catch (error) {
            throw error;
        }
    }
};

async function findPokemonApi(pokemon){
    try {
        let type = [];
        let param = {};
        let url = urlBy.findPokemon + pokemon;
        let found = await genericGet(url, timeout.time);
       
        if(found.status) 
            throw `Erro ao consultar Pokemon ${pokemon}`
        
        found.types.forEach(element => {
            let types ={
                name: element.type.name,
                color:""
            }  
            type.push(types)
        });

        return param = { 
            name: found.name,
            id: found.id,
            type: type
        };
    } catch (error) {
        throw error;
    };
};

async function findPokemonDB(pokemon){
    try {
        let url = urlBy.apiCollor + pokemon;
        return await genericGet(url, timeout.time);
    } catch (error) {
        throw error;
    };
};

async function findCollorPokemon(body){
    try {
        let url = urlBy.getCollor;
        let foundPokemonDB = await genericPost(url, body, timeout.time);
        if(!foundPokemonDB.length) 
            throw "Error ao consultar cor do pokemon!";
      
        return foundPokemonDB;
    } catch (error) {
        throw error;
    };
};

async function findAllPokemonDB(page){
    try {
        let url = urlBy.apiCollorAll + page;
        let found = await genericGet(url, timeout.time);
        if(found.length) return found;
        else if(!found.length) return "Nenhum resultado encontrado para busca na página: " + page;
        else throw "Erro ao consultar Pokemons na base!"
    } catch (error) {
        throw error;
    };
};