const server = require('express').Router();
const { Category } = require('../models/index');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;

server.get('/', function(req, res) {
    var word = req.query.search;
    if (word) {
        Category.findAll({
            where: {
                nombre: {
                    [Op.iLike]: '%' + word + '%'
                }
            }
        }).then(function(categorias) {
            return res.json(categorias);
        })
    } else {
        Category.findAll()
        .then(function(categorias) {
            return res.json(categorias);
        });
    }
});

server.get('/:idcategoria', function(req, res) {
    var id = req.params.idcategoria;
    Category.findOne({
        where: {
            id: id,
        }
    }).then(function(categoria) {
        return res.json(categoria)
    })
})

server.put('/:id', function(req, res){   
    var id = req.params.id;
    Category.findOne({
        where: {
            id: id
        }}).then(function(categoria){
        categoria.update(req.body)
    })
    res.send('Se actualizo la categoria!');
});

server.post('/', function (req, res){
    Category.create(req.body);
    res.send('Se agrego una categoria nueva!');
});

server.delete('/:id', (req, res) => {
    const id = req.params.id;
    Category.destroy({
            where: { 
                id: id 
            }
        })
        .then(categoriaEliminada => {
            res.json(categoriaEliminada);
        })
        res.send('Se elimino la categoria!');
});

module.exports = server;