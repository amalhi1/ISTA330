/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function (input) {
  var retVal = null;
  for (i = 0; i < input.length; i++) {
    temp = [];
    for (j = i; j < input.length; j++) {
      temp.push(input[j]);
      if (retVal === null) {
        retVal = sumList(temp);
      } else if (sumList(temp) > retVal) {
        retVal = sumList(temp);
      }
    }
  }
  return retVal;
};

function sumList(input) {
  sum = 0;
  if (input.length === 1) {
    return input[0];
  } else {
    for (k = 0; k < input.length; k++) {
      sum += input[k];
    }
  }
  return sum;
}
