const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const productos = require ('./products.js');
const categorias = require ('./categories.js');
const ordenes = require ('./orden');
const usuario = require ('./usuario.js');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
// router.use('/products', productRouter);
router.use('/productos', productos);
router.use('/categorias', categorias);
router.use('/changuito', ordenes);
router.use('/usuario', usuario);

module.exports = router;