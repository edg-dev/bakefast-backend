//Aqui fica os métodos de acesso da API
const padaria = require('../models/padaria');

//creating rest API, add CRUD to mongo's schema
padaria.methods(['get', 'post', 'put','delete'])

//return methods updated
padaria.updateOptions({new: true, runValidators: true})

module.exports = padaria

