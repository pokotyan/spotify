export const AUTH = Symbol('AUTH');

export const auth = value => ({
  type: AUTH,
  payload: value,
});

