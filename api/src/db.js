const Sequelize = require('sequelize');

function db() {
  return new Sequelize('postgres://henry4:dadn@localhost5432/development', {
    logging: false, // set to console.log to see the raw SQL queries
  });
}

module.exports = db;
