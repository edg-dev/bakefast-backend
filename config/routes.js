const express = require('express');

module.exports = function(server){

    const router = express.Router();
    server.use('/api', router);

    //Aqui se registra a rota de acesso da api
    const clienteService = require('../services/clienteService')
    clienteService.register(router,'/cliente')

    const padariaService = require('../services/padariaService')
    padariaService.register(router,'/padaria')

    const vendaService = require('../services/vendaService')
    vendaService.register(router,'/venda')

    const notificacoesService = require('../services/notificacoesService')
    notificacoesService.register(router,'/notificacoes')
}