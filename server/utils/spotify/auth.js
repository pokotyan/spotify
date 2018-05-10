const rp = require('request-promise');

class Auth {
  constructor() {
    this.clientId = Buffer.from('e9ff433139b84602b251d4cb5d4e40b2', 'base64');
    this.clientSecret = Buffer.from('7cc50c11da2547388f5e49ae6a0eae7a', 'base64');
  }

  requestAuth() {
    return rp({
      uri: 'https://accounts.spotify.com/authorize',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      qs: {
        response_type: 'code',
        client_id: 'e9ff433139b84602b251d4cb5d4e40b2',
        redirect_uri: 'http://localhost:8081/callback/',
      },
      json: true,
    });
  }

  // auth() {
  //   return rp({
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Basic ${this.clientId}:${this.clientSecret}`,
  //     },
  //     uri: 'https://accounts.spotify.com/api/token',
  //     form: {
  //       grant_type: 'client_credentials',
  //     },
  //     json: true,
  //   });
  // }
}

module.exports = new Auth();
