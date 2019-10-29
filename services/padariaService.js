//Aqui fica os métodos de acesso da API
const padaria = require('../models/padaria');
const server = require('../config/server');

//Endpoints customizados
padaria.route('login', function(req, res){
    var user = req.body.username;
    var senha = req.body.senha;
    console.log(req.body);
    padaria.find({"usuario": {"username": user, "senha": senha}}).exec()
        .then(function(result){
            console.log(result);
            res.send(result);
        })
        .catch(error => {
            console.log(error.response);
        })
});


//creating rest API, add CRUD to mongo's schema
padaria.methods(['get', 'post', 'put','delete']);

//return methods updated
padaria.updateOptions({new: true, runValidators: true});

module.exports = padaria;

