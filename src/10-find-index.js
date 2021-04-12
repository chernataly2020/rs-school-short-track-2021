/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0; // left endpoint
  let last = array.length - 1; // right endpoint
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      found = true;
      position = middle;
    } else if (array[middle] > value) { // if in lower half
      last = middle - 1;
    } else { // in in upper half
      first = middle + 1;
    }
  }
  return position;
}

module.exports = findIndex;
