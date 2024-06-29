/**
 * @param {string} s
 * @return {boolean}
 */
// TC: O(N) , SC: O(1)
var isPalindrome = function (s) {
  const str = s
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
