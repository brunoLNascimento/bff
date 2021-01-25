const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/pokemon_routes']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./server.js')
})