const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  const { code } = req.params;

  const {
    access_token: accessToken,
    refresh_token: refreshToken,
  } = await SpotifyUtil.fetchAccessToken(code);

  const spotifyUtil = new SpotifyUtil({ accessToken, refreshToken });
  const {
    id: spotifyId,
  } = await spotifyUtil.request({ method: 'GET', uri: 'https://api.spotify.com/v1/me' });

  await spotifyUtil.saveTokenToDB({ spotifyId });

  res.send({
    accessToken,
    refreshToken,
  });
  next();
};
