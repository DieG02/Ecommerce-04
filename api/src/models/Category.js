const S = require('sequelize');

const Category = (sequelize, S) => { 
    const modelC = sequelize.define('category', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        nombre: {
            type: S.STRING,
            allowNull: false,
            unique: true
        },

        descripcion: {
            type: S.TEXT,
        },
    }
    , {timestamps: false});
    return modelC;

};

module.exports = Category;
