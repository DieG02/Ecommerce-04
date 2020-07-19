const server = require('express').Router();
const { Orden, Product, Ordenproducto } = require('../models/index');
const Sequelize = require ('sequelize');

server.get('/', function(req, res) {
    Orden.findAll()
        .then(function(products) {
            return res.status(200).send(products);
        });
});

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


// Encuentra el carrito (Falta vincular con usuario)
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
        console.log(carrito)
        if(carrito !== null){
            return res.send(carrito.product)
        } else{
            return res.send([])
        }
    });        
});

//Ruta para agregar ordenes con estado cerrado, solo sirve para comprobar que funciona
//el componente que renderiza la orden en detalle desde el back.
// server.post('/producto/:idproducto', function(req, res) {
//     const idProduct = req.params.idproducto;
    
//     Orden.findOne({
//         where: { estado: 'cerrado' }
//     })
//     .then(carrito => {
//         Ordenproducto.findOne({
//             where: {
//                 ordenId: carrito.dataValues.id,
//                 productId: idProduct, 
//             }
//         }) 
//         .then(product => {
//             product.update({ cantidad: product.cantidad + 1 })
//         })
//         .then(() => {
//             return res.send('Se agrego otra unidad al carrito');
//         })
        
// });

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
    .then(function(order) {
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


server.post('/:idusuario', function(req, res) {
    Orden.create({
            estado: "cerrado",
            usuarioId: req.params.idusuario
        })
        .then(() => {
            return res.send('Se creo una nueva orden!')
        })
        .catch(() => {
            return res.status(400).send('No se pudo crear la orden!')
        })
});


// Agrega producto al carrito (Falta vincular con usuario)
server.post('/producto/:idproducto', function(req, res) {
    const idProduct = req.params.idproducto;
    
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
            product.update({ cantidad: product.cantidad + 1 })
        })
        .then(() => {
            return res.send('Se agrego otra unidad al carrito');
        })
    })

    Orden.findOrCreate({
        where: { estado: 'pendiente' }
    })
    .then(orden => {
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
    
    Orden.findOne({
        where: {
            id: id
        }
    })
    .then(orden => {
        orden.update({
            estado: 'cerrado',
        })
    }).then(() => {
        res.send('Se cerró la orden!');
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