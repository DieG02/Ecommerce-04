const server = require('express').Router();
const { Orden, Product } = require('../models/Orden');
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

server.post("/changuito/:idusuario/:idproducto", function(req, res) {
    const idUser = req.params.idusuario;
    const idProduct = req.params.idproducto;

    var changuito = function() {
        return Orden.findOne({
            where: {
                estado: 'pendiente',
                usuarioId: idUser
            }
        })
    };

    var producto = function() {
        return Product.findByPk(idProduct);
    };


    Promise.all([changuito(), producto()]).then((response) => {
        if (response[0]) {
            response[0].addProduct(response[1])
            return res.send('Se agrego el producto a la orden indicada!')
        } else {
            Orden.create({
                estado: 'pendiente',
                usuarioId: idUser
            }).then(response => {
                response.addProduct(response[1])
                return res.send('Se agrego el producto a la orden indicada!')
            })
        }

    })
});

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