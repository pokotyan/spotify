let glob = require('glob');
let controllers = glob.sync(`${__dirname}/*.js`);
let express = require('express');
let router = express.Router();

module.exports = (app) => {
  controllers.forEach((controller) => {
    if (!controller.match(/index\.js$/)) {
      require(controller)(app);
    }
  });
};
