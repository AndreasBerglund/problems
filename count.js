/**
 * Count the number of items in a list recursively
 * @param {array} arr
 * @returns the number of items in the list
 */
function count(arr) {
  if (arr.length === 0) return 0;
  arr.shift();
  return 1 + count(arr);
}

console.log(count([1, 2, 3])); //3
console.log(count([])); //0
console.log(count([1])); //1
