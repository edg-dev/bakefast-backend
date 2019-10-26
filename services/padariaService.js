//Aqui fica os métodos de acesso da API
const padaria = require('../models/padaria');
const server = require('../config/server');

//Endpoints customizados
server.get('padaria/:username/:senha', (req, res) => {
    var result = padaria.find(req.params.username, req.params.senha).exec();
    res.send(result);
});

//creating rest API, add CRUD to mongo's schema
padaria.methods(['get', 'post', 'put','delete']);

//return methods updated
padaria.updateOptions({new: true, runValidators: true});

module.exports = padaria;

