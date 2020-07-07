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