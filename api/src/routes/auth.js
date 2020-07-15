const server = require('express').Router();
const Sequelize = require ('sequelize');
const Op = Sequelize.Op;
const passport = require('passport');


server.post('/changepassword');


server.post('/login', passport.authenticate('local', 
  { successRedirect: '/', failureRedirect: '/login'}
));


server.get('/logout');

server.post('/register');

server.get('/me');

server.put('/promote');


module.exports = server;
