const server = require('express').Router();
const { Usuario } = require('../models/index');
const Sequelize = require ('sequelize');

server.get('/', function (req, res){
    var usuario = req.body;
    return res.json(usuario);
});

server.post('/', function (req, res){
        Usuario.create(req.body);
        res.send("Se agrego un nuevo usuario!");
});

module.exports = server;