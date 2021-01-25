const servicePokemon = require('../service/pokemon_service');

module.exports = {

    async findByPokemon(req, res){
        try {
            let findBy = req.params.pokemon;
            let pokemon = await servicePokemon.findBy(findBy);
            return res.status(200).send(pokemon)
        } catch (error) {
            console.log(error)
            return res.status(400).send(error)
        }
    },

    async findAllPokemon(req, res){
        try {
            let page = req.params.page ? req.params.page : 0;
            let pokemon = await servicePokemon.find(page);
            return res.status(200).send(pokemon)
        } catch (error) {
            console.log(error)
            return res.status(400).send(error)
        }
    }
}