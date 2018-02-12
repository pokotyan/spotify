let fs = require('fs');
let path = require('path');
let Sequelize = require('sequelize');
let lodash = require('lodash');
let config = require('../config/database.json');
let db = {};

let sequelize = new Sequelize('boiler-plate', config.username, config.password ,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    omitNull: true
});

fs.readdirSync(__dirname).filter((file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach((file) => {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
