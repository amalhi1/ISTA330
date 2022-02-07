/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function (input) {
  mVal = Math.ceil(input.length / 2);
  var occurences = new Map();
  for (i = 0; i < input.length; i++) {
    if (occurences.has(input[i])) {
      occurences.set(input[i], occurences.get(input[i]) + 1);
    } else {
      occurences.set(input[i], 1);
    }
  }
  console.log(occurences);
  for (const [key, value] of occurences.entries()) {
    if (value === mVal) {
      return key;
    }
  }
  return -1;
};
