const servicePokemon = require('../service/pokemon_service');

module.exports = {

    async findByPokemon(req, res){
        try {
            /**
             * #swagger.tags = ['findByPokemon'] 
             * #swagger.description = 'Endpoint para encontrar um pokemon na api (pokeapi) ou na base(caso tenha sido procurado antes), em seguida é enviado para a apiColor, lá irá salvar na base'
             * #swagger.parameters['name'] = { description: 'Nome do pokemon.' }
             * #swagger.parameters['id'] = { description: 'ID do pokemon.' }
            */
            let findBy = req.params.pokemon;
            let pokemon = await servicePokemon.findBy(findBy);
            return res.status(200).send(pokemon)
        } catch (error) {
            console.log(error)
            return res.status(400).send(error)
        }
    },

    async findAllPokemon(req, res){
        /**
         * #swagger.tags = ['findAllPokemon'] 
         * #swagger.description = 'Endpoint para buscar todos os Pokemon na base (consulta apiColor), limite de resultado por página 10'
         * #swagger.parameters['page'] = { description: 'Não obrigatório, caso não seja enviado nenhum número: setado página 0' }
        */
        try {
            let page = req.params.page ? req.params.page : 0;
            if(isNaN(page)) throw "Página deve ser númerico"
            let pokemon = await servicePokemon.find(page);
            return res.status(200).send(pokemon)
        } catch (error) {
            console.log(error)
            return res.status(400).send(error)
        }
    }
}