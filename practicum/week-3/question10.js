/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    retVal = [];
    minDiff = 10000000;
    for (var i=0; i < input.length-1; i++) {
        for (var j=i+1; j < input.length; j++) {
            if (Math.abs(input[i] - input[j]) < minDiff) {
                retVal = [[input[i], input[j]]]
                minDiff = Math.abs(input[i] - input[j])
            } else if (Math.abs(input[j] - input[i]) < minDiff) {
                retVal = [[input[j], input[i]]]
                minDiff = Math.abs(input[j] - input[i])
            } else if (Math.abs(input[j] - input[i]) == minDiff) {
                retVal.push([input[j], input[i]]);
            } else if (Math.abs(input[i] - input[j]) == minDiff) {
                retVal.push([input[i], input[j]]);
            }
        }
    }
    return retVal;
};