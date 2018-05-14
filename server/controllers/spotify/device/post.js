const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  const {
    accessToken,
    refreshToken,
  } = req.body;

  const spotifyUtil = new SpotifyUtil({ accessToken, refreshToken });
  const result = await spotifyUtil.request({ method: 'GET', uri: 'https://api.spotify.com/v1/me/player/devices' });

  res.send(result);

  next();
};
