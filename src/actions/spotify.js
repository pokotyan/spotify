export const AUTH = Symbol('AUTH');
export const FETCH_TOKEN = Symbol('FETCH_TOKEN');
export const SET_TOKEN = Symbol('SET_TOKEN');
export const FETCH_DEVICE = Symbol('FETCH_DEVICE');
export const SEARCH = Symbol('SEARCH');
export const SET_SEARCH_RESULT = Symbol('SET_SEARCH_RESULT');
export const PLAY = Symbol('PLAY');
export const FETCH_PLAYLIST = Symbol('FETCH_PLAYLIST');
export const FETCH_ARTIST = Symbol('FETCH_ARTIST');

export const auth = value => ({
  type: AUTH,
  payload: value,
});

export const fetchToken = code => ({
  type: FETCH_TOKEN,
  payload: code,
});

export const setToken = value => ({
  type: SET_TOKEN,
  payload: value,
});

export const fetchDevice = value => ({
  type: FETCH_DEVICE,
  payload: value,
});

export const search = value => ({
  type: SEARCH,
  payload: value,
});

export const setSearchResult = value => ({
  type: SET_SEARCH_RESULT,
  payload: value,
});

export const play = value => ({
  type: PLAY,
  payload: value,
});

export const fetchPlayList = value => ({
  type: FETCH_PLAYLIST,
  payload: value,
});

export const fetchArtist = value => ({
  type: FETCH_ARTIST,
  payload: value,
});
