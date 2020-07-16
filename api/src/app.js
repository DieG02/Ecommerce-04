const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const morgan = require('morgan');
const { Usuario } = require('./models/index');
const passport = require('passport');
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy;

require('./models');
const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true }))
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function (username, password, done){
    Usuario.findOne({
      where: {
        nombreusuario: username,
      }
    })
    .then(user => {
      if(!user){
        return done(null, false, { message: `${user} no esta registrado` })
      }
      if(user.contraseña !== password){
        return done(null, false, { message: 'Contraseña incorrecta' })
      }
      return done(null, user);
    })
    .catch(err => {
      done(err);
    })
  }
));


passport.serializeUser((user, done) => {
  done(null, user.id)
});
passport.deserializeUser((id, done) => {
  Usuario.findByPk(id)
         .then(user => {
           done(null, user)
         })
         .catch(err => {
           done(err)
         })
});


server.use(session({
    secret: 'mi primera ecommerce',
    resave: false,  
    saveUninitialized: true
  }
));


server.use(passport.initialize());
server.use(passport.session());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());

// Comprobar el usuario
server.use((req, res, next) => {
  console.log(req.session);
  next()
})


/// --- ULTIMO --- ///
server.use('/', routes);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
