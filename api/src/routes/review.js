const server = require('express').Router();
const { Review, Product, Usuario} = require('../models/index');
const Sequelize = require ('sequelize');

function loggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  else{
    return res.json({
      isLogin: false
    })
  }
}

// Postea una review
server.post('/:idProduct', loggedIn, function(req, res) {

  const producto = function() {
    return Product.findOne({
      where: { id: req.params.idProduct }
    })
  }
  const usuario = function() {
    return Usuario.findOne({
      where: { id: req.user.id }
    })
  }
  const comentario = function() {
    return Review.create({
      comentario: req.body.comentario,
      puntuacion: req.body.puntuacion
    })
  }

  Promise.all([producto(), comentario(), usuario()]).then(response => {
      if (response[0] && response[1]) {
        response[0].addReview(response[1])
      if (response[1] && response[2]) {
        response[2].addReview(response[1])
      }
      return res.send('Se agrego tu comentario!')
    } else {
      return res.send('No se pudo agregar tu comentario!')
    }
  })
  .catch(() => res.sendStatus(401))
});


module.exports = server;