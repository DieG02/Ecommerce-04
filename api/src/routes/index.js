const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const pRouter = require ('./products.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
// router.use('/products', productRouter);
router.use('/productos', pRouter);


module.exports = router;

