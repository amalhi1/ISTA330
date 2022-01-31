/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function (input, shuffleIndices) {
  retVal = "";
  string = [];
  for (var i = 0; i < input.length; i++) {
    string.push(input[i]);
  }
  for (var i = 0; i < input.length; i++) {
    string[shuffleIndices[i]] = input[i];
  }
  for (var i = 0; i < string.length; i++) {
    retVal += string[i];
  }
  return retVal;
};

console.log(suffleString("llheo", [2, 3, 0, 1, 4]));
