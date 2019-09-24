//Aqui fica os métodos de acesso da API
const cliente = require('../models/cliente');

//creating rest API, add CRUD to mongo's schema
cliente.methods(['get', 'post', 'put','delete'])

//return methods updated
cliente.updateOptions({new: true, runValidators: true})

module.exports = cliente
