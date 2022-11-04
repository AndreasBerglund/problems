import proxy from "./proxy.js";

console.log(proxy.age); //15
proxy.age = 42;
console.log(proxy.age); //32
