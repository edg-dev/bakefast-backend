//Aqui fica os métodos de acesso da API
const pedido = require('../models/pedido');

//creating rest API, add CRUD to mongo's schema
pedido.methods(['get', 'post', 'put','delete'])

//return methods updated
pedido.updateOptions({new: true, runValidators: true})

module.exports = pedido

