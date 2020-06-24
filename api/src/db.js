const Sequelize = require('sequelize');

function db() {
  return new Sequelize('postgres://henry4:dadn@localhost:5432/development', {
    logging: false, // set to console.log to see the raw SQL queries // lets Sequelize know we can use pg-native for ~30% more speed
  });
}

module.exports = db;
