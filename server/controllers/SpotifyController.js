const express = require('express');

const router = express.Router();

router.get('/spotify/auth', require('./spotify/auth/get'));
router.get('/spotify/token/:code', require('./spotify/token/get'));
router.post('/device', require('./spotify/device/post'));

module.exports = app => app.use('/api', router);
