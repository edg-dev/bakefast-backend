const cliente = require('../models/cliente');

cliente.route('login', function(req, res) {
    var user = req.body.username;
    var senha = req.body.senha;

    cliente.findOne({"usuario" : {"username": user, "senha": senha}}).exec()
        .then(function(result) {
            res.send(result);
        })
        .catch(error => {
            console.log(error.response);
        });
    
});

cliente.methods(['get', 'post', 'put','delete']);

cliente.updateOptions({new: true, runValidators: true});

module.exports = cliente;
