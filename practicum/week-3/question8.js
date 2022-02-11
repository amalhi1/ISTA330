/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    dict = {};
    for (var i = 0; i < input.length; i++) {
        if (input[i] in dict) {
            dict[input[i]] += 1;
        } else {
            dict[input[i]] = 1;
        }
    }
    largest = -1;
    for (var key in dict) {
        if (dict[key] == key) {
            if (key > largest) {
                largest = key;
            }
        }
    }
    return parseInt(largest);
};