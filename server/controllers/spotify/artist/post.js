const qs = require('qs');
const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  const {
    accessToken,
    refreshToken,
    artistId,
  } = req.body;

  const spotifyUtil = new SpotifyUtil({ accessToken, refreshToken });

  const query = qs.stringify({ country: 'JP' });
  const {
    response: topTracks,
  } = await spotifyUtil.request({
    method: 'GET',
    uri: `https://api.spotify.com/v1/artists/${artistId}/top-tracks?${query}`,
  });

  const {
    response: relatedArtists,
    latestToken,
  } = await spotifyUtil.request({
    method: 'GET',
    uri: `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
  });

  res.send({
    response: {
      topTracks,
      relatedArtists,
    },
    latestToken,
  });

  next();
};
