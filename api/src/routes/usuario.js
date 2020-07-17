const server = require('express').Router();
const { Usuario } = require('../models/index');
const Sequelize = require ('sequelize');
const passport = require('passport');
const Op = Sequelize.Op;

function loggedIn(req, res, next){
    console.log(req.user);
    if(req.isAuthenticated()) return next();
    else{
        return res.json({
            loggedIn: false,
        })
    }
}
function isAdmin(req, res, next){
    console.log(req.user);
    if(req.isAuthenticated() && req.user.dataValues.rol === 'Admin')  return next();
    else{
        return res.json({
            isAdmin: false
        })
    }
}
server.post('/login', 
  passport.authenticate('local', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000')
});




/// ----- ADMINISTRADOR ----- ///

// Muestra todos los usuarios 
server.get('/admin', isAdmin, function (req, res){
  Usuario.findAll()
    .then(usuarios => { 
      return res.status(200).json(usuarios)
    })
});

// Ver un usuario en particular
server.get('/admin/:idUsuario', function (req, res){
  const id = req.params.idUsuario;
  Usuario.findOne({
    where:{ id: id }
  })
  .then(usuario => {
    return res.status(200).json(usuario)
  })
});

// Promueve a Admin
server.put('/admin/:idUsuario',  function(req, res){
  const id = req.params.idUsuario;

  Usuario.findOne({
    where:{ id: id }
  }).then(usuario => { 
    usuario.update({ rango: 'Admin'})
  })
  .then(() => {
    return res.send("Ahora es Adminisrador")
  })
  .catch(() => {
    return res.status(400).send("No se ha podido promover a Administrador")
  })
});

// Eliminar al usuario
server.delete('/admin/:idUsuario', (req, res) => {
  const id = req.params.idUsuario;
  Usuario.destroy({
    where: { id: id }
  })
  .then(usuarioEliminado => {
    res.json(usuarioEliminado)
  })
  res.send("Se ha eliminado a este usuario")
});




/// ----- USUARIO ----- ///

// Registrarme
server.post('/', function (req, res){
    Usuario.create(req.body);
    res.send("El usuario se creo!")
});

// Ver mi perfil
server.get('/:idUsuario', loggedIn, function (req, res){
    const id = req.params.idUsuario;
    Usuario.findOne({
        where:{
            id: id
        }
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
    const id = req.params.idUsuario;
    Usuario.findOne({
        where:{
            id: id
        }
    }).then(function(usuario){ 
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
server.delete('/:idUsuario', loggedIn, function (req, res){
    const id = req.params.idUsuario;
    Usuario.destroy({
        where: { 
            id: id 
        }
    })
    .then(usuarioEliminado => {
        res.json(usuarioEliminado)
    });
    res.send("Se ha borrado la cuenta!")
});



module.exports = server;