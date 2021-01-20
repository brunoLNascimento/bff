const servicePokemon = require('../service/pokemon_service');

module.exports = {

    async findPokemon(req, res){
        try {
            let findBy = req.params.pokemon;
            let pokemon = await servicePokemon.find(findBy);
            return res.status(200).send(pokemon)
        } catch (error) {
            let dto = error;
            dto.status = 400;
            return res.status(dto.status).send(dto.error)
        }
    }
}