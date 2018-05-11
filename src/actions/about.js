export const INCREMENT = Symbol('INCREMENT');

export const increment = value => ({
  type: INCREMENT,
  payload: value,
});
