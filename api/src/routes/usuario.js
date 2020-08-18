const server = require('express').Router();
const { Usuario } = require('../models/index');
const Sequelize = require ('sequelize');
const passport = require('passport');

function loggedIn(req, res, next){
    if(req.user) console.log(req.user.dataValues);
    if(req.isAuthenticated()) return next();
    else{
        return res.json({
            isLogin: false,
        })
    }
}

// ---------- AUTENTICACIÓN ---------- //
server.post('/login', 
  passport.authenticate('local', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000')
  }
);
server.get('/logout', 
  function(req, res) {
    req.logout();
    res.redirect('/')
  }
);


/// ----- USUARIO ----- ///

// Ver perfil
server.get('/', loggedIn, function (req, res){
  Usuario.findOne({
    where: { id: req.user.id }
  })
  .then(usuario => {
    return res.status(200).json(usuario)
  })
  .catch(() => {
    return res.status(400).send("El usuario no existe!")
  })
});

// Registrarme
server.post('/', function (req, res){
  Usuario.create(req.body);
  res.send("El usuario se creo!")
});

// Ver usuario en particular
server.get('/:idUsuario', loggedIn, function (req, res){
  const id = req.params.idUsuario;

  Usuario.findOne({
    where: { id: id }
  })
  .then(function(usuario) {
    return res.status(200).json(usuario)
  })
  .catch(() => {
    return res.status(400).send("El usuario no existe!")
  })
});

// Actualizar perfil
server.put('/:idUsuario', loggedIn, function(req, res){
  // const id = req.params.idUsuario
  Usuario.findOne({
    where: { id: req.user.id }
  })
  .then(usuario => { 
    usuario.update(req.body)
  })
  .then(() => {
    return res.send("Has editado tu perfil!")
  })
  .catch(() => {
    return res.status(400).send("No se ha podido editar el perfil!")
  })
});

// Eliminar cuenta
server.delete('/:idUsuario', function (req, res){
  const id = req.params.idUsuario;

  Usuario.destroy({
    where: { id: id }
  })
  .then(usuarioEliminado => {
    res.json(usuarioEliminado)
  })
  res.send("Se ha borrado la cuenta!")
});


module.exports = server;