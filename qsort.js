/**
 * Implementation of the recursive quicksort algorithm
 * Divide and conquer
 * @param {array} arr
 * @returns {array} the sorted array
 */
function qsort(arr) {
  // Base case [0] or []
  if (arr.length < 2) return arr;

  // Recursive case pick a pivot
  const pivot = arr.shift();
  const arr_lower = [];
  const arr_higher = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      arr_lower.push(arr[i]);
    } else {
      arr_higher.push(arr[i]);
    }
  }

  return [...qsort(arr_lower), pivot, ...qsort(arr_higher)];
}

console.log(qsort([1])); // [1]
console.log(qsort([2, 1])); // [1,2]
console.log(qsort([2, 1, 3])); // [1,2,3]
console.log(qsort([22313, 231, -123, 3, 45, -323])); // [ -323, -123, 3, 45, 231, 22313 ]
console.log(qsort([])); //0
console.log(qsort([0])); //0
