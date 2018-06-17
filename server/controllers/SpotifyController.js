const express = require('express');

const router = express.Router();

router.get('/spotify/auth', require('./spotify/auth/get'));
router.get('/spotify/token/:code', require('./spotify/token/get'));
router.post('/device', require('./spotify/device/post'));
router.post('/search', require('./spotify/search/post'));
router.post('/play', require('./spotify/play/post'));
router.post('/playlist', require('./spotify/playlist/post'));
router.post('/artist', require('./spotify/artist/post'));

module.exports = app => app.use('/api', router);
