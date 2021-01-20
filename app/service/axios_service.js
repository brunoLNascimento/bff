const { default: axios } = require("axios");

module.exports = {
    async genericGet(url, timeout){
        return await axios.get(url, {
            timeout: timeout,
        }).then( response => {
            return response.data;
        }).catch( error => {
            return error;
        })
    }
}