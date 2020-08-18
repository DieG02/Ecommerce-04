const server = require('express').Router();
const { Category, Product } = require('../models/index');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;


// Buscar categoría (No implementada al parecer)
server.get('/', function(req, res) {
  var word = req.query.search;
  if (word) {
    Category.findAll({
      where: {
        nombre: { [Op.iLike]: '%' + word + '%' }
      }
    })
    .then(categorias => {
      return res.json(categorias);
    })
  } else {
    Category.findAll()
    .then(categorias => {
      return res.json(categorias);
    })
  }
});

// Busca productos por categoría
server.get('/:id', function(req, res) {
  Category.findByPk(req.params.id)
  .then(categoria => {
    categoria.getProduct({ categoria })
    .then(productos => {
      return res.send(productos)
    })
  })
});

// Crea una nueva categoría
server.post('/', function (req, res){
  Category.create(req.body);
  res.send('Se agrego una categoria nueva!')
});

// Modifica los datos de una categoría 
server.put('/:id', function(req, res){   
  var id = req.params.id;
  Category.findOne({
    where: { id: id }
  })
  .then(categoria => {
    categoria.update(req.body)
  })
  res.send('Se actualizo la categoria!')
});

// Elimina una categoría
server.delete('/:id', (req, res) => {
  const id = req.params.id;
  Category.destroy({
    where: { id: id }
  })
  .then(categoriaEliminada => {
    res.json(categoriaEliminada)
  })
  res.send('Se elimino la categoria!')
});

module.exports = server;