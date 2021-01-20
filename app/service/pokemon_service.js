const { urlBy, timeout} = require('../config/url_config')
const { genericGet } = require('../service/axios_service')

module.exports = {
    async find(pokemon){
        try {
            let url = urlBy.findPokemon + pokemon
            let found = await genericGet(url, timeout.time);
            return found;
        } catch (error) {
            throw error;
        }
    }
}