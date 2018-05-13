const express = require('express');

const router = express.Router();

router.get('/spotify/auth', require('./spotify/auth/get'));
router.get('/spotify/token/:code', require('./spotify/token/get'));

module.exports = app => app.use('/api', router);
