export const INCREMENT = Symbol('INCREMENT');

export const increment = (value) => {
  return {
    type: INCREMENT,
    value,
  };
}
