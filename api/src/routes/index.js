const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const {Product} = require ('../models');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
// router.use('/products', productRouter);
router.get('/productos', function(req, res) {
    var word = req.query.search;
    if (word) {
        Product.findAll({
            where: {
                nombre: word
            }
        }).then(function(products) {
            return res.json(products);
        })
    } else {
        Product.findAll()
        .then(function(products) {
            return res.json(products);
        });
    }
});

module.exports = router;

