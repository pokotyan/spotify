const express = require('express');

const router = express.Router();

router.get('/spotify/auth', require('./spotify/auth/get'));

module.exports = app => app.use('/api', router);
