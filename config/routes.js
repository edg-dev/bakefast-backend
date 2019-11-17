const express = require('express');

module.exports = function(server){

    const router = express.Router();
    server.use('/api', router);

    const clienteService = require('../services/clienteService');
    clienteService.register(router,'/cliente');

    const padariaService = require('../services/padariaService');
    padariaService.register(router,'/padaria');

    const pedidoService = require('../services/pedidoService');
    pedidoService.register(router,'/pedido');

    const notificacoesService = require('../services/notificacoesService');
    notificacoesService.register(router,'/notificacoes');

    const cardapioService = require('../services/cardapioService');
    cardapioService.register(router, '/cardapio');

    const galeriaService = require('../services/galeriaService');
    galeriaService.register(router, '/galeria');
}