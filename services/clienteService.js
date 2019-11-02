//Aqui fica os métodos de acesso da API
const cliente = require('../models/cliente');
const server = require('../config/server');

cliente.route('login', function(req, res) {
    var user = req.body.username;
    var senha = req.body.senha;
    var session = req.session;

    cliente.findOne({"usuario" : {"username": user, "senha": senha}}).exec()
        .then(function(result) {
            //Adiciona os dados na sessão
            session.userid = result.id;

            //Redireciona para a página
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
