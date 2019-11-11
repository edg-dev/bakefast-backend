require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const port = 4000;
const envPort = process.env.PORT;

const server = express();

const upload = require('./upload');
server.use('/api/upload', upload);

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(cors());

server.listen(envPort || port, function () {
    console.log(`API rodando na porta ${envPort}`);
});

module.exports = server;
