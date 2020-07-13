const S = require('sequelize');

const Orden = (sequelize, S) => { 
    const modelO = sequelize.define('orden', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        estado: {
            type: S.STRING,
            allowNull: false,
        },
        
        cantidad_producto: {
            type: S.INTEGER,
        },
        
        total: {
            type: S.REAL,

        }
    },
    {timestamps: false});
    return modelO;
};

module.exports = Orden;