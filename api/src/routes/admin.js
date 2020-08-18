const server = require('express').Router();
const { Usuario } = require('../models/index');
const Sequelize = require ('sequelize');


// La autenticación le llega por medio del FrontEnd ---> { credentials: include }

function isAdmin(req, res, next){
    console.log(req.user.dataValues);
    if(req.isAuthenticated() && req.user.rol === 'Admin')  return next();
    else{
        return res.json({
            isAdmin: false
        })
    }
}

/// ----- ADMINISTRADOR ----- ///

// Muestra todos los usuarios 
server.get('/', isAdmin, function (req, res){
  Usuario.findAll()
    .then(usuarios => { 
      return res.status(200).json(usuarios)
    })
});

// Ver un usuario en particular
server.get('/:idUsuario', isAdmin, function (req, res){
  const id = req.params.idUsuario;
  Usuario.findOne({
    where:{ id: id }
  })
  .then(usuario => {
    return res.status(200).json(usuario)
  })
});

// Promueve a Admin
server.put('/:idUsuario', isAdmin, function(req, res){
  const id = req.params.idUsuario;

  Usuario.findOne({
    where:{ id: id }
  })
  .then(usuario => { 
    usuario.update({ rol: 'Admin'})
  })
  .then(() => {
    return res.send("Ahora es Adminisrador")
  })
  .catch(() => {
    return res.status(400).send("No se ha podido promover a Administrador")
  })
});

// Eliminar al usuario
server.delete('/:idUsuario', isAdmin, (req, res) => {
  const id = req.params.idUsuario;
  Usuario.destroy({
    where: { id: id }
  })
  .then(usuarioEliminado => {
    res.json(usuarioEliminado)
  })
  res.send("Se ha eliminado a este usuario")
});

module.exports = server;

