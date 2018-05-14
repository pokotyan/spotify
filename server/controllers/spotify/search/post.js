const querystring = require('querystring');
const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  const {
    accessToken,
    refreshToken,
    query,
    type,
  } = req.body;

  const spotifyUtil = new SpotifyUtil({ accessToken, refreshToken });
  const uri = `https://api.spotify.com/v1/search?${
    querystring.stringify({
      q: query,
      type,
    })}`;
  const result = await spotifyUtil.request({ method: 'GET', uri });

  res.send(result);

  next();
};
