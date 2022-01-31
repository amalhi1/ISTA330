/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function (n) {
  allDigits = [];
  while (n != 0) {
    allDigits.push(n % 10);
    n = Math.floor(n / 10);
  }
  allDigits.sort();
  retVal = allDigits[allDigits.length - 1] - allDigits[0];
  return retVal;
};
