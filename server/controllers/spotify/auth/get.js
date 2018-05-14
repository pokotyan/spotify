const SpotifyUtil = require('../../utils/spotify');

module.exports = async (req, res, next) => {
  res.redirect(SpotifyUtil.createAuthorizeUri());
};
