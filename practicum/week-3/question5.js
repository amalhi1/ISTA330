/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function (input) {
  if (input[0] <= input[1]) {
    type = "increasing";
  } else {
    type = "decreasing";
  }
  for (i = 0; i < input.length - 1; i++) {
    j = i + 1;
    if (
      (type === "increasing" && input[i] <= input[j]) ||
      (type === "decreasing" && input[i] >= input[j])
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
