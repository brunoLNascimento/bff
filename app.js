let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');
let app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./endpoints')

app.use(bodyParser.json(), swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.urlencoded({extended:true}));

consign({cwd:'app'})
    .then('controllers')
    .then('routes')
    .then('config')
    .into(app);

module.exports = app;