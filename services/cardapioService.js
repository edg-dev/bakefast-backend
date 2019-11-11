const cardapio = require('../models/cardapio');

cardapio.route('getCardapio', function(req, res){
    var idPadaria = req.body.idPadaria;

    cardapio.findOne({"idPadaria": idPadaria}).exec()
        .then(function(result){
            res.send(result);
        })
        .catch(error => {
            console.log(error.response);
        });
});

cardapio.methods(['get', 'post', 'put', 'delete']);

cardapio.updateOptions({new : true, runValidators: true});

module.exports = cardapio;
