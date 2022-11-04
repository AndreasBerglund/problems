let counter = 0;
export default Object.freeze({
  get: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
});
