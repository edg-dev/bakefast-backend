const padaria = require('../models/padaria');

padaria.route('login', function(req, res){
    var user = req.body.username;
    var senha = req.body.senha;

    padaria.findOne({"usuario": {"username": user, "senha": senha}}).exec()
        .then(function(result){  
            res.send(result);
        })
        .catch(error => {
            console.log(error.response);
        })
});

padaria.methods(['get', 'post', 'put','delete']);

padaria.updateOptions({new: true, runValidators: true});

module.exports = padaria;
