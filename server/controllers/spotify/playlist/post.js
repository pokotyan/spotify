const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  const {
    accessToken,
    refreshToken,
    contextUri,
  } = req.body;

  const spotifyUtil = new SpotifyUtil({ accessToken, refreshToken });

  const result = await spotifyUtil.request({
    method: 'GET',
    uri: contextUri,
  });

  res.send(result);

  next();
};
