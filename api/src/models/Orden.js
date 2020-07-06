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
            type: S.BOOLEAN,   // ver si está bien el type
            allowNull: false,
            unique: true,
        },
        cantidad_producto: {
            type: S.INTEGER,
            
        }
    },
    {timestamps: false});
    return modelO;
};

module.exports = Orden;