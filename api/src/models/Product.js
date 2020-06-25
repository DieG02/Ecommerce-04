const Product = (sequelize, S) => {
  // defino el modelo
  const P = sequelize.define('product', {
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
      type: S.INTEGER,
      allowNull: false,
    },

    color: {
      type: S.STRING,
      allowNull: false
    },

    precio: {
      type: S.INTEGER,
      allowNull: false
    },

    imagen: {
      type: S.STRING,
    },

    stock: {
      type: S.INTEGER,
      allowNull: false
    }


  });
  
  return P;
};

module.exports = Product;
