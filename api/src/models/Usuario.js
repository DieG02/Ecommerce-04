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
        },

        apellido: {
            type: S.STRING,
            allowNull: false,
        },

        nombreusuario: {
            type: S.STRING,
            allowNull: false,
            unique: true,
        },
        
        contraseña: {
            type: S.STRING,
            allowNull: false
        },

        foto: {
            type: S.STRING,
        }

    },
    {timestamps: false});
    return modelU;
};

module.exports = Usuario;