/**
 * Find the highest number in a list recursively
 * @param {array} arr
 * @returns the highest number
 */
function max(arr) {
  // Base case, arr length 2 return the highest number of the two
  if (arr.length === 0) return 0;
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  arr.shift();
  const sub_max = max(arr);
  return arr[0] > sub_max ? arr[0] : sub_max;
}

console.log(max([1, 2, 3])); //3
console.log(max([])); //0
console.log(max([1, 6, 2, 100])); //100
