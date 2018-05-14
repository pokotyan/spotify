/* eslint class-methods-use-this: ["error", { "exceptMethods": ["_refreshAccessToken"] }] */

const querystring = require('querystring');
const rp = require('request-promise');
const db = require('../../models');

const clientId = 'e9ff433139b84602b251d4cb5d4e40b2';
const clientSecret = '7cc50c11da2547388f5e49ae6a0eae7a';
const redirectUri = 'http://localhost:8081/callback';

class Spotify {
  constructor({ accessToken, refreshToken }) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  static createAuthorizeUri() {
    return `https://accounts.spotify.com/authorize?${
      querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: 'user-read-playback-state',
        // state: state
      })}`;
  }

  static fetchAccessToken(code) {
    return rp({
      method: 'POST',
      uri: 'https://accounts.spotify.com/api/token',
      form: {
        grant_type: 'authorization_code',
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
      },
      json: true,
    });
  }

  async _refreshAccessToken(refreshToken) {
    const buf = Buffer.from(`${clientId}:${clientSecret}`);

    const {
      access_token: accessToken,
    } = await rp({
      method: 'POST',
      uri: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization: `Basic ${buf.toString('base64')}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      form: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      json: true,
    });

    this.accessToken = accessToken;

    return accessToken;
  }

  async request({ method, uri }) {
    const accessToken = await this._refreshAccessToken(this.refreshToken);

    return rp({
      method,
      uri,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      json: true,
    });
  }

  async saveTokenToDB({ spotifyId }) {
    const user = await db.users.findOne({
      where: { spotify_id: spotifyId },
    });

    if (user) {
      await db.users.update({
        access_token: this.accessToken,
        refresh_token: this.refreshToken,
      }, {
        where: { spotify_id: spotifyId },
      });
    } else {
      await db.users.create({
        spotify_id: spotifyId,
        access_token: this.accessToken,
        refresh_token: this.refreshToken,
      });
    }
  }
}

module.exports = Spotify;
