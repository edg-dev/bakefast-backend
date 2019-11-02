const port = 4000;

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const sess = require('express-session');

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(cors());

server.use(sess({
    secret: 'shhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));
var session;
server.listen(process.env.PORT || port, function () {
    console.log('API rodando...');
});

module.exports = server;
