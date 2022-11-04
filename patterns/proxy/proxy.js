const person = {
  name: "John",
  age: 15,
};

export default new Proxy(person, {
  get: (target, property) => {
    if (property === "age") {
      if (target[property] > 40) {
        console.log("I am in my start thirties...");
        target[property] = 32;
      }
    }
    return Reflect.get(target, property);
  },
  set: (target, property, value) => {
    return Reflect.set(target, property, value);
  },
});
