const app = require('../app');
const request = require('supertest');

const bulbasaur = {
    "name": "bulbasaur",
}

const ivysaur = {
        "id": 2
}

const idInexistente = {
    "id": 9999
}

describe('Testando api bff', () => {
    setTimeout( function () {
        process.exit()
      }, 10000);
      
    it(`#Consultando Pokemon pelo nome ${bulbasaur.name}`, done => {
        request(app)
            .get(`/findby/${bulbasaur.name}`)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    })

    it(`#Consultando Pokemon pelo ID ${ivysaur.id}`, done => {
        request(app)
            .get(`/findby/${ivysaur.id}`)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    })

    it(`#Consultando todos pokemons: sem informar página`, done => {
        request(app)
            .get('/find')
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    })

    it(`#Consultando Pokemon pelo ID inexistente ${ivysaur.id}`, done => {
        request(app)
            .get(`/findby/${idInexistente.id}`)
            .expect('Content-Type',"text/html; charset=utf-8")
            .timeout(5000)
            .expect(400)
            .end(done)
    })


})