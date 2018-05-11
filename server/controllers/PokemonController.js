const express = require('express');

const router = express.Router();

router.get('/pokemon', require('./pokemon/get'));

module.exports = app => app.use('/api', router);
