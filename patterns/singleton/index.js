import counter from "./counter.js";
import incrementTwoTimes from "./otherfile.js";

console.log(counter.get()); //0
console.log(counter.increment()); //1

incrementTwoTimes();

console.log(counter.get()); // 3
