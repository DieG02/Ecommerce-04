const server = require('express').Router();
const { Usuario } = require('../models/index');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;

server.get('/', function (req, res){
    Usuario.findAll()
        .then(function(usuarios) { 
            return res.status(200).json(usuarios);
        });
});

server.get('/:idUsuario', function (req, res){
    const id = req.params.idUsuario;
    Usuario.findOne({
        where:{
            id: id
        }
    }).then(function(usuario) {
            return res.status(200).json(usuario);
        })
        .catch(() => {
            return res.status(400).send("El usuario no existe!")
        })
});

server.post('/', function (req, res){
        Usuario.create(req.body);
        res.send("El usuario se creo!");
});

server.put('/:idUsuario', function(req, res){
    const id = req.params.idUsuario;

    Usuario.findOne({
        where:{
            id: id
        }
    }).then(function(usuario){ 
        usuario.update(req.body)
    })
    .then(() => {
        return res.send("El usuario se editó!")
    })
    .catch(() => {
        return res.status(400).send("no se ha podido editar el usuario!")
    })
});

// Ruta para eliminar al usuario funcionando.
server.delete('/:idUsuario', (req, res) => {
    const id = req.params.idUsuario;
    Usuario.destroy({
            where: { 
                id: id 
            }
        })
        .then(usuarioEliminado => {
            res.json(usuarioEliminado);
        })
        res.send('Se elimino el usuario!');
});

module.exports = server;