/**
 * Find the highest number in a list recursively
 * @param {array} arr
 * @returns the highest number
 */
function max(arr) {
  // Base case, arr length 1 return the number
  if (arr.length < 2) {
    return arr.length === 0 ? 0 : arr[0];
  }
  const [first, ...next_arr] = arr;
  const sub_max = max(next_arr);
  return first > sub_max ? first : sub_max;
}

console.log(max([1, 2, 3])); //3
console.log(max([])); //0
console.log(max([1, 6, 2, 100])); //100
console.log(max([1000, 6, 2, 100])); //1000
console.log(max([1000, 6, -22134423, 54604, 100])); //54604
