/**
 * Given an array of numbers, recursively find the total sum
 * @param {array} arr
 * @returns sum of input array
 */
function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  } else {
    // Shift manipulates arr in place by removing the first number
    return arr.shift() + sum(arr);
  }
}

console.log(sum([1, 2, 3, 4])); //10
console.log(sum([1, 2, 30, 4])); //37
console.log(sum([])); //0
console.log(sum([0])); //0
