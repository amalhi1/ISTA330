/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

var canGetEqualCookies = function (cookies, extraCookies) {
  if (cookies.length == 0) {
    return;
  }

  max = cookies[0];
  for (var i = 0; i < cookies.length; i++) {
    if (cookies[i] > max) {
      max = cookies[i];
    }
  }
  numCookies = extraCookies;
  for (var i = 0; i < cookies.length; i++) {
    if (cookies[i] < max) {
      numNeeded = max - cookies[i];
      if (numNeeded > numCookies) {
        return false;
      }
      numCookies -= numNeeded;
    }
  }
  if (numCookies > 0 || numCookies > cookies.length) {
    return false;
  }
  return true;
};
