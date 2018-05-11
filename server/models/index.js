const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const lodash = require('lodash');
const config = require('../config/database.json');

const db = {};

const sequelize = new Sequelize('boiler-plate', config.username, config.password, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  omitNull: true,
});

fs.readdirSync(__dirname).filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js')).forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = lodash.extend({
  sequelize,
  Sequelize,
}, db);
