const server = require('express').Router();
const { Orden, Product, Ordenproducto } = require('../models/index');
const Sequelize = require ('sequelize');

function loggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    else{
        return res.json({
            isLogin: false,
        })
    }
}

// Ruta para obtener TODAS las ordenes.
server.get('/all', function(req, res) {
    Orden.findAll({
        where: {
            estado:'cerrado'
        }
    }).then(function(orders) {
            return res.status(200).send(orders);
        });
});

// Encuentra el carrito
server.get('/productos', function(req, res) {
    Orden.findOne({
        where: {
            estado: 'pendiente'
        },
        include: {
            model: Product, as: 'product'
        }
    }) 
    .then(carrito => {
        if(carrito !== null){
            return res.send(carrito.product)
        } else{
            return res.send([])
        }
    });        
});

// Ruta para obtener detalles de una orden
server.get('/:idOrden', function(req, res) {
    var id = req.params.idOrden

    Orden.findOne({
        where: {
            id: id,
            estado:'cerrado'
        }, 
        include: {
            model: Product, as: 'product'
        }
    })
    .then(order => {
        console.log(order)
        return res.status(200).send(order.product);
    })
    .catch(() => {
        return res.status(400).send('No se pudo encontrar la orden!')
    })
});

// Devulve la cantidad del producto en el carrito
server.get('/productos/:idProducto', function(req, res) {
    const { idProduct } = req.params.idProduct

    Orden.findOne({
        where: { estado: 'pendiente' }
    })
    .then(carrito => {
        Ordenproducto.findOne({
            where: {
                ordenId: carrito.dataValues.id,
                productId: idProduct, 
            }
        }) 
        .then(product => {
            return res.send(product.cantidad);
        })
    })     
});

// Cerramos orden
server.post('/:idusuario', function(req, res) {
    Orden.create({
            estado: "cerrado",
            usuarioId: req.params.idusuario || req.user.id
        })
        .then(() => {
            return res.send('Se creo una nueva orden!')
        })
        .catch(() => {
            return res.status(400).send('No se pudo crear la orden!')
        })
});

// Agrega producto al carrito (Vinculado con un usuario)
server.post('/producto/:idproducto', loggedIn, function(req, res) {
    const idProduct = req.params.idproducto;

    Orden.findOne({
        where: { 
            estado: 'pendiente',
            usuarioId: req.user.id  
        }
    })
    .then(carrito => {
        console.log('Encontramos el carrito y +1')
        console.log(carrito)
        Ordenproducto.findOne({
            where: {
                productId: idProduct, 
                ordenId: carrito.dataValues.id
            }
        }) 
        .then(product => {
            product.update({ cantidad: product.cantidad + 1 })
        })
        .then(() => {
            return res.send('Se agrego otra unidad al carrito');
        })
    })

    Orden.findOrCreate({
        where: { 
            estado: 'pendiente',
            total: 0,
            usuarioId: req.user.id 
        }
    })
    .then(orden => {
        console.log('Creamos el carrito')
        console.log(orden)
        Ordenproducto.create({
            cantidad: 1,
            productId: idProduct,
            ordenId: orden[0].dataValues.id 
        })
    })
    .then(() => {
        return res.send('Se agrego el producto a la carrito');
    })
})

// Ruta para setear a cantidad dentro del carrito
server.put('/:id/:cantidad', function(req, res) {
    const { id, cantidad} = req.params;
    Orden.findOne({
        where: { estado: 'pendiente' }
    })
    .then(carrito => {
        Ordenproducto.findOne({
            where: {
                ordenId: carrito.dataValues.id,
                productId: id, 
            }
        }) 
        .then(product => {
            product.update({ cantidad: cantidad })
        })
    })
    .then(() => { return res.send("Se agrego mas unidades al carrito") })
    .catch(() => { return res.status(400).send('No hay mas unidades de este articulo!') })
});

// Ruta para finalizar compra, setea estado en cerrado.
server.put('/:idOrden', function(req, res) {
    const id = req.params.idOrden;
    let total = 0;

    // Obtenemos todos los productos de la orden
    Ordenproducto.findAll({
        where: { ordenId: id }
    })
    .then(products => {
        products.map( p => {
            Product.findOne({
                where: { id : p.productId}
            })
            .then(propiedades => {
                console.log(total);
                total += (propiedades.precio * p.cantidad);
            })
        })
    })    
    .then(() => {
        Orden.findOne({
            where: {
                id: id
            }
        })
        .then(orden => {
            orden.update({
                total: total,
                estado: 'cerrado',
            })
        }).then(() => {
            res.send('Se cerró la orden!');
        })
    })
    
})

// Ruta para sacar un producto del carrito
server.delete('/productos/:idProducto', (req, res) => {
    const id = req.params.idProducto;

    Orden.findOne({
        where: {
            estado: 'pendiente'
        },
    }) 
    .then(carrito => {
        if(carrito !== null){
            Ordenproducto.destroy({ 
                where: { 
                    ordenId: carrito.dataValues.id,
                    productId: id, 
                }
            })
            .then(() => {
                return res.send('Se elimino del carrito!')
            })
        } else{
            return res.send('No se pudo eliminar del carrito!')
        }
    })   
});




module.exports = server;