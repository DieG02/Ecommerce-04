const S = require('sequelize');


const Orden_producto = (sequelize, S) => { 
    const modelOP = sequelize.define('orden_producto', {
        cantidad: {
            type: S.INTEGER,
            allowNull: false,
        },
    },
    {timestamps: false});
    return modelOP;
};

module.exports = Orden_producto;