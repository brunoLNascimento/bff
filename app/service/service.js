const { default: axios } = require("axios");

module.exports = {
    async genericGet(url, timeout){
        return await axios.get(url, {
            timeout: timeout,
        }).then( response => {
            if(response.data)
                return response.data;
            else
                return response;//ver como vai ficar o retorno da api collor
        }).catch( error => {
            return error;
        })
    }
}