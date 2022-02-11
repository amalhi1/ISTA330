/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function (n) {
  groups = [];
  for (var i = n; i > 0; i--) {
    group = [];
    num = i;
    if (num >= 10) {
      sumOfDigits = 0;
      for (var j = 0; j < String(num).length; j++) {
        sumOfDigits += parseInt(String(num)[j]);
      }
      while (num >= 20) {
        group.push(num - 9);
        num -= 10;
      }
      group.push(sumOfDigits);
      group.push(i);
    } else {
      group.push(num);
    }
    groups.push(group);
  }
  retVal = 0;
  largest = 0;
  for (var i = 0; i < groups.length; i++) {
    if (groups[i].length > largest && largest == 0) {
      largest = groups[i].length;
      retVal += 1;
    } else if (groups[i].length > largest) {
      largest = groups[i].length;
      retVal = 1;
    } else if (groups[i].length == largest) {
      retVal++;
    }
  }
  return retVal;
};
