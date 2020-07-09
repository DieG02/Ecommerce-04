const S = require('sequelize');

const Usuario = (sequelize, S) => { 
    const modelU = sequelize.define('usuario', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        email: {
            type: S.STRING,
            allowNull: false,
            unique: true,
            isEmail: true,
        },

        nombre: {
            type: S.STRING,
            allowNull: false,
            unique: true,
        },

        apellido: {
            type: S.STRING,
            allowNull: false,
            unique: true,
        },

        nombreusuario: {
            type: S.STRING,
            allowNull: false,
            unique: true,
        },
        
        contraseña: {
            type: S.STRING,
            allowNull: false,
            unique: true,
        }

    },
    {timestamps: false});
    return modelU;
};

module.exports = Usuario;