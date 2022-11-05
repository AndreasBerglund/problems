const subscribers = [];
export default Object.freeze({
  subscribe: (func) => subscribers.push(func),
  unsubsribe: (func) => {},
  notify: (data) => {
    subscribers.forEach((func) => func(data));
  },
});
