import { sum, multiply } from "./math.js";
console.log(sum(1, 2)); // 3
console.log(multiply(123, 2)); // 246
console.log(
  "it is not possible to use subtract because it is not exported from math.js"
);
