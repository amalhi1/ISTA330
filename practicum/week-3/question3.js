/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function (n) {
  var retVal = [];
  for (h = 0; h < n; h++) {
    retVal.push([]);
  }
  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      if (i === j || j === 0) {
        retVal[i][j] = 1;
      } else {
        retVal[i][j] = retVal[i - 1][j - 1] + retVal[i - 1][j];
      }
    }
  }
  return retVal;
};
