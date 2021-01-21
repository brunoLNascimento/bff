const { default: axios } = require("axios");

module.exports = {
    async genericGet(url, timeout){
        return await axios.get(url, {
            timeout: timeout,
        }).then( response => {
            if(response.data)
                return response.data;
            else
                return response;
        }).catch( error => {
            return error;
        })
    },

    async genericPost(url, body, timeout){
        return await axios.post(url, body, {
            timeout: timeout,
        }).then( response => {
            if(response.data)
                return response.data;
            else
                return response;
        }).catch( error => {
            return error;
        })
    }
}