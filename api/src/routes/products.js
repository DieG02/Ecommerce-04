const server = require('express').Router();
const { Product, Category } = require('../models/index');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;

// Buscar productos por nombre
server.get('/', function(req, res) {
  const word = req.query.search;
  if (word) {
    Product.findAll({
      where: {
        nombre: { [Op.iLike]: '%' + word + '%' }
      }
    })
    .then(function(products) {
      return res.json(products)
    })
  } else {
    Product.findAll({
      where: {
        stock: { [Op.gt]: 0 }
      }
    })
    .then(function(products) {
      return res.json(products)
    })
  }
});

// Buscar producto por ID
server.get('/:idproducto', function(req, res) {
  const id = req.params.idproducto;
  Product.findOne({
    where: { id: id }
  })
  .then(function(product) {
    return res.json(product)
  })
})

// Crea un producto
server.post('/', function (req, res){
  Product.create(req.body);
  res.send('Se agrego un producto nuevo!')
});

// Modifica los datos de un productos para una categoría
server.put('/pxcategoria/:id', function(req, res){   
  const id = req.params.id;
  const accion = req.body.accion;
  const nameCat = req.body.categoria;

  const producto = function () {
    return Product.findOne({
      where: { id: id }
    })
  };

  const categoria = function () {
    return Category.findOne({
        where: { nombre: nameCat }
    })
  };

  if (accion) {
    if (accion = "agregar") {
      Promise.all([producto(), categoria()]).then((response ) => {
        if (response[0] && response[1]) {
          (response[0]).addCategory(response[1]);
          res.send("Operacion exitosa!")
        } else {
          res.status(404).send("Categoria o producto invalidos!")
        }
      })
      .catch(() => res.sendStatus(400))
    }
    
    if (accion = "eliminar") {
      Promise.all([producto(), categoria()]).then((response) => {
        if (response[0] && response[1]) {
          (response[0]).removeCategory(response[1]);
          res.send("Operacion exitosa!")
        } else {
          res.status(404).send("Categoria o producto invalidos!")
        }
      })
      .catch(() => res.sendStatus(400))
    }
  }
});

// Edita un producto
server.put('/:id', function(req, res){
  const id = req.params.id;

  Product.findOne({
    where:{ id: id }
  })
  .then(function(producto){
    producto.update(req.body)
  })
  .then(() => {
    return res.send("El producto se actualizo!")
  })
  .catch(() => {
    return res.status(400).send("no se ha podido actualizar el producto!")
  })
});

// Elimina un producto
server.delete('/:id', (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
  .then(productoEliminado => {
    res.json(productoEliminado)
  })
  res.send('Se elimino el producto!')
});

module.exports = server;