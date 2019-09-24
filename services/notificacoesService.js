//Aqui fica os métodos de acesso da API
const notificacoes = require('../models/notificacoes');

//creating rest API, add CRUD to mongo's schema
notificacoes.methods(['get', 'post', 'put','delete'])

//return methods updated
notificacoes.updateOptions({new: true, runValidators: true})

module.exports = notificacoes

