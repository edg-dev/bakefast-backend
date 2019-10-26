//Aqui fica os métodos de acesso da API
const cliente = require('../models/cliente');
const server = require('../config/server');

cliente.route('login', function(req, res) {
    var user = req.body.username;
    var senha = req.body.senha;
    console.log(req.body);
    cliente.find({}).exec()
        .then(function(result) {
            console.log(result);
            res.send(result)
        })
        .catch(error => {
            console.log(error.response);
        });
    
});

//creating rest API, add CRUD to mongo's schema
cliente.methods(['get', 'post', 'put','delete']);

//return methods updated
cliente.updateOptions({new: true, runValidators: true});

module.exports = cliente;
