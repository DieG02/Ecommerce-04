const server = require('express').Router();
const { Orden, Product, Ordenproducto } = require('../models/index');
const Sequelize = require ('sequelize');

server.get('/', function(req, res) {
    Orden.findAll()
        .then(function(products) {
            return res.status(200).send(products);
        });
});

server.post('/:idusuario', function(req, res) {
    Orden.create({
            estado: "cerrado",
            usuarioId: req.params.idusuario
        })
        .then(() => {
            return res.send('Se creo una nueva orden!')
        })
        .catch(() => {
            return res.status(400).send('No se pudo crear la orden!')
        })
});

server.post('/producto/:idproducto', function(req, res) {
    const idProduct = req.params.idproducto;
    
    Orden.findOrCreate({
        where: {
            estado: 'pendiente'
        }
    })
    .then(orden => {
        Ordenproducto.create({
            cantidad: 1,
            productId: idProduct,
            ordenId: orden[0].dataValues.id
        })
    })
    .then(() => {
        res.send('Se agrego el producto a la carrito');
    })
})

server.put('/:id', function(req, res) {
    const estado = req.body.estado;
    const cantidad = req.body.cantidad;
    const id = req.params.id;

    Orden.findOne({
            where: {
                id: id
            }
        }).then(function(product) {
            Orden.update({
                estado: estado,
                cantidad: cantidad,
            })
        })
        .then(() => {
            return res.send('Se actualizo la orden!')
        })
        .catch(() => {
            return res.status(400).send('No se pudo actualizar la orden!');
        })

});


module.exports = server;