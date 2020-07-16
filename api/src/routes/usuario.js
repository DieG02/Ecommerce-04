const server = require('express').Router();
const { Usuario } = require('../models/index');
const Sequelize = require ('sequelize');
const passport = require('passport');
const Op = Sequelize.Op;


function loggedIn(req, res, next){
    console.log(req.user);
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()) return next();
    else{
        return res.json({
            loggedIn: false,
            isAdmin: false,
            message: 'Not authenticated'
        })
    }
}

// Muestra todos los usuarios (Admin)
server.get('/', function (req, res){
    Usuario.findAll()
        .then(function(usuarios) { 
            return res.status(200).json(usuarios);
        });
});

// Ver un usuario en particular (Admin - User)
server.get('/:idUsuario', loggedIn, function (req, res){
    const id = req.params.idUsuario;
    Usuario.findOne({
        where:{
            id: id
        }
    }).then(function(usuario) {
            return res.status(200).json(usuario);
        })
        .catch(() => {
            return res.status(400).send("El usuario no existe!")
        })
});

// Crea un usuario
server.post('/', function (req, res){
        Usuario.create(req.body);
        res.send("El usuario se creo!");
});

// Autenticación a la ruta /login
server.post('/login', 
  passport.authenticate('local', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000')
});

// Actualiza el usuario ( User - Admin )
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
        return res.send("El usuario se ha editado!")
    })
    .catch(() => {
        return res.status(400).send("no se ha podido editar el usuario!")
    })
});

// Ruta para eliminar al usuario funcionando (Admin - User)
server.delete('/:idUsuario', (req, res) => {
    const id = req.params.idUsuario;
    Usuario.destroy({
            where: { 
                id: id 
            }
        })
        .then(usuarioEliminado => {
            res.json(usuarioEliminado);
        })
        res.send('Se elimino el usuario!');
});

module.exports = server;