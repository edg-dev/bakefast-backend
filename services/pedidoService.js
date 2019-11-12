//Aqui fica os métodos de acesso da API
const pedido = require('../models/pedido');

pedido.route('getPedidos', function(req, res){
    var idPadaria = req.body.idPadaria;

    pedido.find({"idPadaria": idPadaria}).exec()
    .then(result => {
        res.send(result);
    })
    .catch(error => {
        console.log(error.response);
    });
});

//creating rest API, add CRUD to mongo's schema
pedido.methods(['get', 'post', 'put','delete'])

//return methods updated
pedido.updateOptions({new: true, runValidators: true})

module.exports = pedido

