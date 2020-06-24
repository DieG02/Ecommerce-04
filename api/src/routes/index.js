const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const {Product} = require ('../models');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
// router.use('/products', productRouter);
router.get('/productos', function (req, res) {
    Product.findAll()
        .then(function(product) {
            res.send(product);
        });
});


module.exports = router;
