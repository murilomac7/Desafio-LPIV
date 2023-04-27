// Exemplificação dos comandos git
// biblioteca js que faz o mapeamento das pastas em função do server.js
require('rootpath')(); 
// Inicialização do express. 
var express = require('express');
// essa biblioteca será utilizada na API para fazer autenticaçao seguindo o método JWT. 
// Se quiser estudar um pouco mais sobre JWT, pesquise aqui
// https://jwt.io/introduction/
var expressJwt = require('express-jwt');
var config = require("./config.json");
var cors = require('cors');

// Criação da API e indicação que trabalha com JSON
var api = express();
api.use(cors());
api.use(express.urlencoded());
api.use(express.json());

api.use('/api/produtorio/recursivo', require('./controllers/api/prod.recursivo.controller'));
api.use('/api/produtorio/iterativo', require('./controllers/api/prod.iterativo.controller'));

// process.env.PORT é uma variável injetada pelo Azure Web App. Caso ela não exista, será utilizada a porta fixa (6000)
var apiPort = process.env.PORT || config.port;

// start server API
var serverAPI = api.listen(apiPort, function () {
    console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});

console.log('Application started');
