const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const productos = require ('./products.js');
const categorias = require ('./categories.js');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
// router.use('/products', productRouter);
router.use('/productos', productos);
router.use('/categorias', categorias);

module.exports = router;

