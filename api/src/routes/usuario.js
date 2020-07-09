const server = require('express').Router();
const { Usuario } = require('../models/index');
const Sequelize = require ('sequelize');

server.get('/', function (req, res){
    Usuario.findAll()
        .then(function(usuarios) {
            return res.status(200).json(usuarios);
        });
});

server.post('/', function(req, res) {
    Usuario.create(req.body)
        .then(() => {
            return res.send('Se creo un nuevo usuario!')
        })
        .catch(() => {
            return res.status(400).send('No se pudo crear un nuevo usuario!')
        })
});

module.exports = server;