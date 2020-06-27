const server = require('express').Router();
const { Product } = require('../models/index');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;

server.get('/', function(req, res) {
    var word = req.query.search;
    if (word) {
        Product.findAll({
            where: {
                nombre: {
                    [Op.iLike]: '%' + word + '%'
                }
            }
        }).then(function(products) {
            return res.json(products);
        })
    } else {
        Product.findAll()
        .then(function(products) {
            return res.json(products);
        });
    }
});

server.get('/:idproducto', function(req, res) {
    var id = req.params.idproducto;
    Product.findOne({
        where: {
            id: id,
        }
    }).then(function(product) {
        return res.json(product)
    })
})

server.post('/', function (req, res){
    Product.create(req.body);
    res.send('Se agrego un producto nuevo!');
});

server.put('/:id', function(req, res){   
    var id = req.params.id;
    Product.findOne({
        where: {
            id: id
        }}).then(function(product){
        product.update(req.body)
    })
    res.send('Se actualizo el producto!');
});

server.delete('/:id', (req, res) => {
    const id = req.params.id;
    Product.destroy({
            where: { 
                id: id 
            }
        })
        .then(productoEliminado => {
            res.json(productoEliminado);
        })
        res.send('Se elimino el producto!');
});

module.exports = server;