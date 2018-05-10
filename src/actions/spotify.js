export const AUTH = Symbol('AUTH');

export const auth = (value) => {
  return {
    type: AUTH,
    payload: value,
  };
};

