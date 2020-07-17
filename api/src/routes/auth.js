const server = require('express').Router();

server.post('/changepassword');


// server.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return json({
//         success: false,
//         message: err.message,
//         info,
//       });
//     }
//     if (!user) {
//       return res.json({
//         success: false,
//         info,
//       });
//     }
//     req.logIn(user, function(err) {
//       if (err) {
//         return res.json(err);
//       }
//       return res.json({
//         success: true,
//         message: 'Se ha loggeado con exito!',
//         info,
//         user,
//       });
//     });
//   })(req, res, next);
// });

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));


server.get('/logout');

server.post('/register');

server.get('/me');

server.put('/promote');


module.exports = server;
