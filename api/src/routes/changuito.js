const server = require('express').Router();
const { Category, Orden, Usuario } = require('../models/index');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;

server.get('/', function (req, res){
    var orden = req.body;
    return res.json(orden);
});

server.post('/', function (req, res){
        Orden.create(req.body);
        res.send("Se agrego un nuevo elemento al changuito!");
});

// server.get('/', function(req, res) {
//     var orden = req.body;
//     if (orden) {
//         Orden.findAll({
//             where: {
//                 estado: {
//                     [Op.iLike]: '%' + orden + '%'
//                 }
//             }
//         }).then(function(orden) {
//             return res.json(orden);
//         })
//     } else {
//         Product.findAll()
//         .then(function(orden) {
//             return res.json(orden);
//         });
//     }
// });

// server.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     Category.destroy({
//             where: { 
//                 id: id 
//             }
//         })
//         .then(categoriaEliminada => {
//             res.json(categoriaEliminada);
//         })
//         res.send('Se elimino la categoria!');
// });

module.exports = server;