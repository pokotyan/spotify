const glob = require('glob');

const controllers = glob.sync(`${__dirname}/*.js`);

module.exports = (app) => {
  controllers.forEach((controller) => {
    if (!controller.match(/index\.js$/)) {
      require(controller)(app);
    }
  });
};
