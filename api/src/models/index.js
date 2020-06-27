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
   Category = require('./Category')
} = models;

// Add model relationships here
db.Sequelize = Sequelize;

Product.belongsToMany(Category, { as: "category", through: "productByCategories" });
Category.belongsToMany(Product, { as: "product", through: "productByCategories" });

Product.hasOne(Category, {as: "category", foreignKey: "idProduct"})
Category.belongsTo(Product, { as: "product", foreignKey: "idCategory" });

Product.hasMany(Category, {as: "categories", foreignKey: "idProduct"})
Category.belongsTo(Product, { as: "product" });





module.exports = models;
