/**
 * The simplest and stupidest way to implement a pseudo hashmap of length 5
 */
function HashMap() {
  this.map = [[], [], [], [], []];
  this.find = function (key) {
    const index = this.hash(key);
    if (this.map[index].length > 0) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) return this.map[index][i][1];
      }
    }
  };
  this.insert = function (key, value) {
    const index = this.hash(key);
    this.map[index].push([key, value]);
  };
  /**
   * This is the function that assigns a slot in the map / array
   * @param {string} key
   * @returns {number}
   */
  this.hash = function (key) {
    // Map every letter to a prime number, the assigned slot is sum of prime number modulo length of array
    const az = "abcdefghijklmnopqrstuvwxyz".split(""); // this should not be done every time, but oh well
    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101,
    ];
    // Sum letter prime numbers
    let sum = 0;
    for (const c in key) {
      const index = az.indexOf(key[c]);
      sum += primes[index];
    }
    return sum % 5;
  };
}

const hashmap = new HashMap();
hashmap.insert("pear", 5);
hashmap.insert("apple", 10);
hashmap.insert("banana", 10);
hashmap.insert("pineapple", 10);
hashmap.insert("lemon", 10);

const hashmap2 = new HashMap();
console.log(hashmap2.map); // [ [], [], [] ,[], [] ]

console.log(hashmap.find("lemon")); //10
console.log(hashmap.find("cucumber")); //undefined
