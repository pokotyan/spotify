const express = require('express');
const router = express.Router();

router.get('/test', require('./test/get'));

module.exports = (app) => app.use('/api', router);
