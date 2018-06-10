const querystring = require('querystring');

const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  const {
    accessToken,
    refreshToken,
    contextUri,
  } = req.body;

  const spotifyUtil = new SpotifyUtil({ accessToken, refreshToken });
  const googleHome = '6840806829404813a3e43fb4b2910823';
  const uri = `https://api.spotify.com/v1/me/player/play?${
    querystring.stringify({
      device_id: googleHome,
    })}`;

  const result = await spotifyUtil.request({
    method: 'PUT',
    uri,
    headersOption: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      context_uri: contextUri,
      // offset: { position: 0 }, // こういうエラーが返るようになったのでコメントアウト {"error":{"status":400,"message":"Can't have offset for context type: ARTIST"}}
    },
  });

  res.send(result);

  next();
};
