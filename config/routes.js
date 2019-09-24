const express = require('express');

module.exports = function(server){

    const router = express.Router();
    server.use('/api', router);

    //Aqui se registra a rota de acesso da api
}