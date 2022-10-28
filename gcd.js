/**
 * Using recursion find the greatest common demoninator of two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number} greatest common demoninator
 */
function gcd(num1, num2) {
  const remainder = num1 % num2;
  if (remainder === 0) {
    return num2;
  } else {
    return gcd(num2, remainder);
  }
}

gcd(3768, 1701); //3
gcd(45, 10); //5
gcd(1234, 54342); //2
