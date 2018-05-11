export const GET = Symbol('GET');
export const CORRECT = Symbol('CORRECT');
export const UN_CORRECT = Symbol('UN_CORRECT');

export const get = value => ({
  type: GET,
  payload: value,
});

export const correct = value => ({
  type: CORRECT,
  payload: value,
});

export const unCorrect = value => ({
  type: UN_CORRECT,
  payload: value,
});
