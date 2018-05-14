const db = require('../../../models');
const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  const { code } = req.params;

  const {
    access_token: accessToken,
    refresh_token: refreshToken,
  } = await SpotifyUtil.fetchAccessToken(code);

  const spotifyUtil = new SpotifyUtil({ accessToken, refreshToken });
  const {
    id: userId,
  } = await spotifyUtil.fetchUser();

  const user = await db.users.findOne({
    where: { spotify_id: userId },
  });

  if (user) {
    await db.users.update({
      access_token: accessToken,
      refresh_token: refreshToken,
    }, {
      where: { spotify_id: userId },
    });
  } else {
    await db.users.create({
      spotify_id: userId,
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }

  res.send({
    accessToken,
    refreshToken,
  });
  next();
};
