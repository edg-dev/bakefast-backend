const cliente = require('../models/cliente');
const bc = require('bcryptjs');
const saltRounds = 10;

cliente.route('login', function(req, res) {
    var user = req.body.username;
    var senha = req.body.senha;

    cliente.findOne({"usuario.username": user}).exec()
        .then(function(result) {
            if(result === null){
                res.send("");
            } else {
                bc.compare(senha, result.usuario.senha, function(err, rest){
                    if(!rest){                    
                        res.send("");
                        return;
                    } else {
                        res.send(result);
                    }
                    console.log(res);
                }); 
            }         
        })
        .catch(error => {
            console.log(error);
        });
    
});

cliente.methods(['get', 'post', 'put','delete']);

cliente.before('post', hash)
        .before('put', hash);

cliente.updateOptions({new: true, runValidators: true});


function hash(req, res, next){
    req.body.usuario.senha = bc.hash(req.body.usuario.senha, saltRounds, function(err, hash){
        if(err){ console.log('Erro: ' + err); }
        else {
            req.body.usuario.senha = hash;
            next();
        }
    });
}

module.exports = cliente;
