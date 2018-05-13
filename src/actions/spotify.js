export const AUTH = Symbol('AUTH');
export const FETCH_TOKEN = Symbol('FETCH_TOKEN');
export const SET_TOKEN = Symbol('SET_TOKEN');

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
