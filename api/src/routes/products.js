const server = require('express').Router();
const { Product, Category } = require('../models/index');
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
    var accion = req.body.accion;
    var idCategoria = req.body.categoria;

    var producto = function () {
        return Product.findOne({
            where: {
                id: id
            }});
    };

    var categoria = function () {
            return Category.findOne({
                where: {
                    id: idCategoria
                }
            });
    };

    if (accion) {
        if (accion = "agregar") {
            Promise.all([producto(), categoria()]).then((response ) => {
                if (response[0] && response[1]) {
                    (response[0]).addCategory(response[1])
                } else {
                    res.status(404).send("Categoria o producto invalidos!");
                };
            }).catch(() => res.sendStatus(400));   
        }
        
        if (accion = "eliminar") {
            Promise.all([producto(), categoria()]).then((response) => {
                if (response[0] && response[1]) {
                    (response[0]).removeCategory(response[1])
                } else {
                    res.status(404).send("Categoria o producto invalidos!");
                };
            }).catch(() => res.sendStatus(400));
        }
    } else {
            producto().then(function(product){
            product.update(req.body)
        })
        res.send('Se actualizo el producto!');
    }
    
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