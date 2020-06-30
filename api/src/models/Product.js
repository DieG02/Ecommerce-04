const S = require('sequelize');

const Product = (sequelize, S) => {
  const modelP = sequelize.define('product', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: S.STRING,
      allowNull: false,
    },

    descripcion: {
      type: S.TEXT,
    },

    talle: {
      type: S.STRING,
      allowNull: false,
    },

    color: {
      type: S.STRING,
      allowNull: false
    },

    precio: {
      type: S.REAL,
      allowNull: false
    },

    imagen: {
      type: S.STRING,
    },

    stock: {
      type: S.INTEGER,
      allowNull: false
    },

  }
  , {timestamps: false});
  return modelP;
};

module.exports = Product;
