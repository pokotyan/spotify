const rp = require('request-promise');

module.exports = async (req, res, next) => {
  const { code } = req.params;
  const clientId = 'e9ff433139b84602b251d4cb5d4e40b2';
  const clientSecret = '7cc50c11da2547388f5e49ae6a0eae7a';
  const redirectUri = 'http://localhost:8081/callback';

  const result = await rp({
    method: 'POST',
    uri: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    },
    json: true,
  });

  res.send(result);
  next();
};
