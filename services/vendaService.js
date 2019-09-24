//Aqui fica os métodos de acesso da API
const venda = require('../models/venda');

//creating rest API, add CRUD to mongo's schema
venda.methods(['get', 'post', 'put','delete'])

//return methods updated
venda.updateOptions({new: true, runValidators: true})

module.exports = venda

