const fs = require('fs');
const path = require('path');
const db = require('../db');
const { Sequelize } = require('sequelize');

const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split('.')[0];
    models[name] = model;
  });

const {
  Product = require('./Product'),
  Category = require('./Category'),
  Usuario = require('./Usuario'),
  Orden = require('./Orden'),
  Ordenproducto = require('./Ordenproducto')

} = models;

// Add model relationships here
db.Sequelize = Sequelize;

Product.belongsToMany(Category, { as: "category", through: "productByCategories" });
Category.belongsToMany(Product, { as: "product", through: "productByCategories" });

Product.belongsToMany(Orden, { as: "orden", through: Ordenproducto});
Orden.belongsToMany(Product, { as: "product", through: Ordenproducto});

Usuario.belongsToMany(Orden, { as: "usuario", through: "orden_usuario" });
Orden.belongsTo(Usuario, { as: "orden", through: "orden_usuario"});

module.exports = models;