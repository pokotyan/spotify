const querystring = require('querystring');
// const { auth } = require('../../../utils/spotify');

const clientId = 'e9ff433139b84602b251d4cb5d4e40b2';
// client_secret: config.client_secret,
const redirectUri = 'http://localhost:8081/callback';

module.exports = async (req, res, next) => {
  // const result = await auth.requestAuth().catch(e => console.log(e));

  res.redirect(`https://accounts.spotify.com/authorize?${
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: 'user-read-playback-state',
      redirect_uri: redirectUri,
      // state: state
    })}`);
};
