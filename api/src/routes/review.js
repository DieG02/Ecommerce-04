const server = require('express').Router();
const { Review, Product } = require('../models/index');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;

// Ruta que postea una review. Falta tomar el id del usuario desde la sesion
server.post('/:idProduct', function (req, res){
    var idProduct = req.params.idProduct;
    var idUser = req.user.id;
    
    Review.create({
        productId: idProduct,
        puntuacion: req.body.puntuacion,
        comentario: req.body.comentario
    }).then(() => {
        return res.send('Se publico su review!')
    })
    .catch(() => {
        return res.status(400).send('No se pudo publicar su review!')
    })
});


module.exports = server;